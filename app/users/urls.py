from django.urls import path
from .views import ListUserView, SingleUserView, RetrieveUpdateProfileView


urlpatterns = [
    path('', ListUserView.as_view(), name="list-of-users"),
    path('<int:pk>', SingleUserView.as_view(), name="single-user"),
    path("profile/<int:pk>", RetrieveUpdateProfileView.as_view(), name="get-or-update-profile"),
]
