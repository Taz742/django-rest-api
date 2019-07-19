from rest_framework import serializers
from users.serializers import UserSerializer
from .models import Car, Categories, Manufacturers, Has, AdditionalInformation
from django.db import transaction


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class ManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufacturers
        fields = '__all__'


class AnyUserCarsListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Car
        exclude = ('user',)


class CurrentlyLogedUserCarsListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Car
        fields = ("id", "description_en", "description_ge", "category")


class AdditionalInformationSerializer(serializers.Serializer):
    categories = CategorySerializer(many=True)
    manufacturers = ManufacturerSerializer(many=True)


class WritableHasSerializer(serializers.ModelSerializer):

    class Meta:
        model = Has
        fields = '__all__'


class WritableAdditionalInformationSerializer(serializers.ModelSerializer):

    class Meta:
        model = AdditionalInformation
        fields = '__all__'


class ReadWriteCarSerializer(serializers.ModelSerializer):
    has = WritableHasSerializer()
    additional_information = WritableAdditionalInformationSerializer()
    user = UserSerializer(required=False)

    class Meta:
        model = Car
        fields = '__all__'

    def create(self, validated_data):
        validated_has_data = validated_data.pop("has")
        validated_additional_information_data = validated_data.pop("additional_information")

        with transaction.atomic():
            user = self.context["request"].user
            car = Car.objects.create(**validated_data, user=user)
            car.save()

            has = Has.objects.create(**validated_has_data, car=car)
            has.save()

            additional_information = AdditionalInformation(**validated_additional_information_data, car=car)
            additional_information.save()

            return car
