from rest_framework import serializers
from .models import Product
from django.db import transaction
from versatileimagefield.serializers import VersatileImageFieldSerializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'price', 'created', 'image')
    