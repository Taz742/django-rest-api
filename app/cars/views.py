from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Car
from .serializers import CarSerializer


# Create your views here.
class ListCreateCarsView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.AllowAny]
