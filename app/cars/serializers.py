from rest_framework import serializers
from .models import Car, CarsCategory


class CarsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CarsCategory
        fields = '__all__'


class FullDetailCarSerializer(serializers.ModelSerializer):
    category = CarsCategorySerializer()

    class Meta:
        model = Car
        exclude = ('user',)


class SmallDetailCarSerializer(serializers.ModelSerializer):
    category = CarsCategorySerializer()

    class Meta:
        model = Car
        fields = ("id", "description_en", "description_ge", "category")
