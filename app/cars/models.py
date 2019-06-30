from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Category(models.Model):
    name = models.CharField(max_length=255, blank=False, unique=True)


class Car(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, related_name="cars")
    categori = models.OneToOneField(Category, on_delete=models.CASCADE, blank=False, related_name="car")
