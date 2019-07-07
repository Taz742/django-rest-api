from django.urls import path
from .views import AnyUserListCarsView, CurrentlyLogedUserListCarsView, AdditionalInformationView


urlpatterns = [
    path('', AnyUserListCarsView.as_view(), name="list-of-cars"),
    path('my/', CurrentlyLogedUserListCarsView.as_view(), name="list-of-currently-loged-user-cars"),
    path('additional-information/', AdditionalInformationView.as_view(), name="cars-additional-information")
]
