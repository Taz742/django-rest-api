from django.urls import path
from .views import LoginView


urlpatterns = [
    path('auth/', LoginView.as_view(), name="user-auth"),
]