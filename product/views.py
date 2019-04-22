from rest_framework import generics
from .models import ProductModel
from .serializers import ProductSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_framework.views import status

# from django.contrib.auth.models import User
# from users.serializers import UserSerializer


class ListCreateProductView(generics.ListCreateAPIView):
    """
    Provides a get and post method handler.
    """
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = super(ListCreateProductView, self).get_queryset()
        query_params = self.request.query_params
        if query_params.get('price') is not None:
            queryset = queryset.filter(price__gte=query_params['price'])
        return queryset


class RetrieveUpdateDestroyProductView(generics.RetrieveUpdateDestroyAPIView):
    """
    Provides a get put patch delete method handler.
    """
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

