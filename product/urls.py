from django.urls import path
from .views import ListCreateProductView, RetrieveUpdateDestroyProductView


urlpatterns = [
    path('products/', ListCreateProductView.as_view(), name="product-list-or-create"),
    path('products/<int:pk>/', RetrieveUpdateDestroyProductView.as_view(), name="product-get_single-update-delete"),
]