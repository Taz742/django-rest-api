from django.urls import path
from .views import AuthenticationView


urlpatterns = [
    path('auth/', AuthenticationView.as_view(), name="user-auth"),
]