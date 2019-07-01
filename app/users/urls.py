from django.urls import path
from .views import ListUserView, SingleUserView


urlpatterns = [
    path('', ListUserView.as_view(), name="list-of-users"),
    path('<int:pk>', SingleUserView.as_view(), name="single-user"),
]
