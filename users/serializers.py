from rest_framework import serializers
from django.contrib.auth import models # If used custom user model
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(validators=[UniqueValidator(queryset=models.User.objects.all())])

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = models.User.objects.create(**validated_data)
        user.set_password(password)
        user.save()

        return user

    class Meta:
        model = models.User
        fields = ("id", "username", "password", "email")