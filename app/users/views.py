from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import UserSerializer
from django.db.models import Count


# Create your views here.
class ListUserView(generics.ListAPIView):
    """
    Provides a get list of user.
    """
    # queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return User.objects.annotate(cars_count=Count("cars"))

    def list(self, request):
        lst = User.objects.annotate(count=Count("cars"))
        print(lst.values_list('email', 'count'))
        return super(ListUserView, self).list(request)
