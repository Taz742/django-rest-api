from django.urls import path
from .views import ListCreateCarsView


urlpatterns = [
    path('cars/', ListCreateCarsView.as_view(), name="list-of-cars"),
]