from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinLengthValidator

from app.models import TimeStampedModel


User = get_user_model()


class Categories(models.Model):
    name_en = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")
    name_ge = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")

    def __str__(self):
        return self.name_en


class Manufacturers(models.Model):
    name_en = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")
    name_ge = models.CharField(max_length=255, validators=[MinLengthValidator(1)], blank=False, unique=True, default="")

    def __str__(self):
        return self.name_en


class Has(models.Model):
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


class AdditionalInformation(models.Model):
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, blank=False, related_name="car")
    manufacturer = models.ForeignKey(Manufacturers, on_delete=models.CASCADE, blank=False, related_name="car")


class Car(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, related_name="cars")
    title = models.CharField(max_length=255, validators=[MinLengthValidator(1)], default="")
    description_en = models.TextField(validators=[MinLengthValidator(1)], default="")
    description_ge = models.TextField(validators=[MinLengthValidator(1)], default="")
    has = models.OneToOneField(Has, on_delete=models.CASCADE, blank=False, related_name="car", default=None)
    additional_information = models.OneToOneField(AdditionalInformation, on_delete=models.CASCADE, blank=False, related_name="car", default=None)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-created_date',)
