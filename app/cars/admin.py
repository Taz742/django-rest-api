from django.contrib import admin
from .models import Car, CarsCategories, CarsManufacturers


admin.site.register(Car)
admin.site.register(CarsCategories)
admin.site.register(CarsManufacturers)
