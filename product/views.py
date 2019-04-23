from rest_framework import generics
from .models import ProductModel
from .serializers import ProductSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import status
from rest_framework.authentication import TokenAuthentication


class ListCreateProductView(generics.ListCreateAPIView):
    """
    Provides a get and post method handler.
    """
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = super(ListCreateProductView, self).get_queryset()
        query_params = self.request.query_params
        if query_params.get('price') is not None:
            queryset = queryset.filter(price__gte=query_params['price'])
        return queryset

    def list(self, request):
        print(request.user)
        return super(ListCreateProductView, self).list(request)

class RetrieveUpdateDestroyProductView(generics.RetrieveUpdateDestroyAPIView):
    """
    Provides a get put patch delete method handler.
    """
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

