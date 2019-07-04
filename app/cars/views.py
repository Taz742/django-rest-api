from django.shortcuts import render

from rest_framework import generics, permissions, pagination
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Car
from .serializers import SmallDetailCarSerializer, FullDetailCarSerializer


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


class ListCarsView(generics.ListAPIView):
    serializer_class = SmallDetailCarSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = [BasicAuthentication]
    pagination_class = CarsPagination
    queryset = Car.objects.all()


class ListOfCurrentlyLogedUserCarsView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    pagination_class = CarsPagination

    def get_serializer_class(self):
        if self.action == 'list':
            return SmallDetailCarSerializer
        else:
            return FullDetailCarSerializer

    def get_queryset(self):
        """
        This view should return a list of all the cars
        for the currently authenticated user.
        """
        user = self.request.user
        return Car.objects.filter(user=user)
