from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator
from .models import User, Profile


class CustomEmailSerializer(serializers.EmailField):
    def to_internal_value(self, data):
        data = data.lower()
        return super(CustomEmailSerializer, self).to_internal_value(data)


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'
        

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    email = CustomEmailSerializer(validators=[UniqueValidator(queryset=User.objects.all())])
    profile = UserProfileSerializer(many=False, read_only=True)
    cars_count = serializers.IntegerField(default=0)

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()

        profile = Profile.objects.create(user=user)
        profile.save()

        return user

    class Meta:
        model = User
        fields = ("id", "password", "email", "profile", "cars_count")
