from django.urls import path
from .views import AnyUserListCarsView, CurrentlyLogedUserListCarsView, AdditionalInformationView, RetrieveCreateCarView


urlpatterns = [
    path('', AnyUserListCarsView.as_view(), name="list-of-cars"),
    path('additional-information/', AdditionalInformationView.as_view(), name="cars-additional-information"),
    path('my/', CurrentlyLogedUserListCarsView.as_view(), name="list-of-currently-loged-user-cars"),
    path('my/<int:pk>/', RetrieveCreateCarView.as_view(), name="retrieve-create-car")
]
