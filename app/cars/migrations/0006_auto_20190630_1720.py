# Generated by Django 2.2.2 on 2019-06-30 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0005_auto_20190630_1717'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='categori',
            new_name='category',
        ),
    ]
