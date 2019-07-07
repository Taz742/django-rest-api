from django.shortcuts import render

from rest_framework import generics, permissions, pagination
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Car, CarsCategories, CarsManufacturers
from .serializers import AnyUserListCarsSerializer, CurrentlyLogedUserListCarsSerializer, AdditionalInformationSerializer


class CarsPagination(pagination.PageNumberPagination):
    page_size = 20

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'cars': data
        })


class AnyUserListCarsView(generics.ListCreateAPIView):
    """
    This view should return a list of all cars for any user
    """
    serializer_class = AnyUserListCarsSerializer
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (BasicAuthentication,)
    pagination_class = CarsPagination
    queryset = Car.objects.all()


class CurrentlyLogedUserListCarsView(generics.ListAPIView):
    """
    This view should return a list of all the cars
    for the currently authenticated user.
    """
    serializer_class = CurrentlyLogedUserListCarsSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)
    pagination_class = CarsPagination

    def get_queryset(self):
        user = self.request.user
        return Car.objects.filter(user=user)


class AdditionalInformationView(generics.ListAPIView):
    """
    This view should return a list of additional information
    """
    serializer_class = AdditionalInformationSerializer
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (BasicAuthentication,)
    
    def get_queryset(self):
        return {
            "categories": CarsCategories.objects.all(),
            "manufacturers": CarsManufacturers.objects.all(),
        }

    def list(self, request):
        data = AdditionalInformationSerializer(self.get_queryset()).data
        return Response(data=data)
