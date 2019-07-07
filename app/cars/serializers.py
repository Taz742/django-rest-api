from rest_framework import serializers
from .models import Car, CarsCategories, CarsManufacturers


class CarsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CarsCategories
        fields = '__all__'


class CarsManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarsManufacturers
        fields = '__all__'


class AnyUserListCarsSerializer(serializers.ModelSerializer):
    category = CarsCategorySerializer()

    class Meta:
        model = Car
        exclude = ('user',)


class CurrentlyLogedUserListCarsSerializer(serializers.ModelSerializer):
    category = CarsCategorySerializer()

    class Meta:
        model = Car
        fields = ("id", "description_en", "description_ge", "category")


class AdditionalInformationSerializer(serializers.Serializer):
    categories = CarsCategorySerializer(many=True)
    manufacturers = CarsManufacturerSerializer(many=True)
