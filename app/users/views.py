from django.shortcuts import render
from django.db.models import Count

from rest_framework import generics
from rest_framework.permissions import AllowAny

from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import User, Profile
from .serializers import UserSerializer, ProfileSerializer
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
    Provides a get single user.
    """
    # queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsOwner]

    def get_queryset(self):
        return User.objects.annotate(cars_count=Count("cars"))


class RetrieveUpdateProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = [IsOwner]
    authentication_classes = [JWTAuthentication]
