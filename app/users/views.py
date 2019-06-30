from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import UserSerializer


# Create your views here.
class ListUserView(generics.ListAPIView):
    """
    Provides a get list of user.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def list(self, request):
        return super(ListUserView, self).list(request)
