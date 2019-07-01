# Generated by Django 2.2.2 on 2019-07-01 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0006_auto_20190630_1720'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Category',
            new_name='CarsCategory',
        ),
        migrations.AddField(
            model_name='car',
            name='additional_boot',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='air_conditioner',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='bicycle_clip',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='child_seat',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='heating',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='microphone',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='mini_bar',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='navigation',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='refrigerator',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='ski_clip',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='smoking',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='car',
            name='wifi',
            field=models.BooleanField(default=False),
        ),
    ]
