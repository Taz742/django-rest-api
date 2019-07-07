from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinLengthValidator

from app.models import TimeStampedModel


User = get_user_model()


class CarsCategories(models.Model):
    name_en = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")
    name_ge = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")


class CarsManufacturers(models.Model):
    name_en = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")
    name_ge = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")


class CarHas(models.Model):
    heating = models.BooleanField(default=False)
    microphone = models.BooleanField(default=False)
    additional_boot = models.BooleanField(default=False)
    bicycle_clip = models.BooleanField(default=False)
    air_conditioner = models.BooleanField(default=False)
    mini_bar = models.BooleanField(default=False)
    child_seat = models.BooleanField(default=False)
    smoking = models.BooleanField(default=False)
    wifi = models.BooleanField(default=False)
    refrigerator = models.BooleanField(default=False)
    ski_clip = models.BooleanField(default=False)
    navigation = models.BooleanField(default=False)


class CarAdditionalInformation(models.Model):
    category = models.ForeignKey(CarsCategories, on_delete=models.CASCADE, blank=False, related_name="car")
    manufacturer = models.ForeignKey(CarsManufacturers, on_delete=models.CASCADE, blank=False, related_name="car")


class Car(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, related_name="cars")
    title = models.CharField(max_length=255, validators=[MinLengthValidator(1)], default="")
    description_en = models.TextField(validators=[MinLengthValidator(1)], default="")
    description_ge = models.TextField(validators=[MinLengthValidator(1)], default="")
    has = models.ForeignKey(CarHas, on_delete=models.CASCADE, blank=False, related_name="car", default=None)
    additional_information = models.ForeignKey(CarAdditionalInformation, on_delete=models.CASCADE, blank=False, related_name="car", default=None)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-created_date',)
