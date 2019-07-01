from django.urls import path
from .views import ListCarsView, ListOfCurrentlyLogedUserCarsView


urlpatterns = [
    path('', ListCarsView.as_view(), name="list-of-cars"),
    path('my/', ListOfCurrentlyLogedUserCarsView.as_view(), name="list-of-currently-loged-user-cars"),
]