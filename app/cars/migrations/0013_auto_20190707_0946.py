# Generated by Django 2.2.2 on 2019-07-07 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0012_auto_20190707_0822'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CarEditionalInformation',
            new_name='CarAdditionalInformation',
        ),
        migrations.RenameModel(
            old_name='CarsManufacturer',
            new_name='CarsCategories',
        ),
        migrations.RenameModel(
            old_name='CarsCategory',
            new_name='CarsManufacturers',
        ),
    ]