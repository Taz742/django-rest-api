from rest_framework import serializers
from .models import Car, CarsCategory


class CarsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CarsCategory
        fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
    category = CarsCategorySerializer()

    class Meta:
        model = Car
        exclude = ('user',)
