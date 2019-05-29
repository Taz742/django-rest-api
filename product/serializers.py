from rest_framework import serializers
from .models import ProductModel, ProductDetailModel, FakeDetailChild
from django.db import transaction
from versatileimagefield.serializers import VersatileImageFieldSerializer


def do_something():
    print('do something')


class FakeSerializer(serializers.ModelSerializer):
    product_detail = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = FakeDetailChild
        fields = '__all__'


class ProductDetailSerializer(serializers.ModelSerializer):
    fake_child = FakeSerializer()

    class Meta:
        model = ProductDetailModel
        fields = ('id', 'description', 'fake_child')


class ProductSerializer(serializers.ModelSerializer):
    detail = ProductDetailSerializer()

    class Meta:
        model = ProductModel
        fields = ('id', 'title', 'price', 'detail', 'created')
    

    def parse_data(self, validated_data):
        product_data = validated_data
        product_detail_data = product_data.pop('detail')
        product_detail_fake_child_data = product_detail_data.pop('fake_child')
        
        return (product_data, product_detail_data, product_detail_fake_child_data)

    def create(self, validated_data):
        product_data, product_detail_data, product_detail_fake_child_data = self.parse_data(validated_data)

        with transaction.atomic():
            transaction.on_commit(do_something)
            
            product_instance = ProductModel.objects.create(**product_data)
            product_detail_instance = ProductDetailModel.objects.create(product=product_instance, **product_detail_data)
            product_detail_fake_child = FakeDetailChild.objects.create(product_detail=product_detail_instance, **product_detail_fake_child_data)

            # raise Exception()

        return product_instance
    
    def update(self, product_instance, validated_data):
        product_data, product_detail_data, product_detail_fake_child_data = self.parse_data(validated_data)

        with transaction.atomic():
            product_instance.title = product_data['title']
            product_instance.price = product_data['price']
            product_instance.save()

            product_detail_instance = ProductDetailModel.objects.get(product=product_instance)
            product_detail_instance.description = product_detail_data['description']
            product_detail_instance.save()

            product_detail_fake_child_instance = FakeDetailChild.objects.get(product_detail=product_detail_instance)
            product_detail_fake_child_instance.fake_field = product_detail_fake_child_data['fake_field']
            product_detail_fake_child_instance.save()

            # raise Exception()

        return product_instance
