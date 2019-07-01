from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import UserSerializer
from django.db.models import Count
from .permissions import IsOwner


class ListUserView(generics.ListAPIView):
    """
    Provides a get list of user.
    """
    # queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return User.objects.annotate(cars_count=Count("cars"))


class SingleUserView(generics.RetrieveAPIView):
    """
    Provides a get list of user.
    """
    # queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny, IsOwner]

    def get_queryset(self):
        return User.objects.annotate(cars_count=Count("cars"))

    # def retrieve(self, request):
        

