from rest_framework import serializers, validators
from django.contrib.auth import get_user_model
from .models import User, Profile


class CustomEmailSerializer(serializers.EmailField):
    def to_internal_value(self, data):
        data = data.lower()
        return super(CustomEmailSerializer, self).to_internal_value(data)


class ProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Profile
        fields = ("id", "first_name", "last_name", "mobile")
        

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    email = CustomEmailSerializer(validators=[validators.UniqueValidator(queryset=User.objects.all())])
    profile = ProfileSerializer(many=False)
    cars_count = serializers.IntegerField(default=0, read_only=True)

    def create(self, validated_data):
        profile = validated_data.pop("profile")
        password = validated_data.pop("password")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()

        profile = Profile.objects.create(user=user, **profile)
        profile.save()

        return user

    def update(self, validated_data):
        email = validated_data["email"]
        profile_data = validated_data["profile"]

        user = User.objects.get(email=email)
        profile = user.profile
        profile.first_name = profile_data.get("first_name", profile.first_name)
        profile.last_name = profile_data.get("last_name", profile.last_name)
        profile.mobile = profile_data.get("mobile", profile.mobile)

    class Meta:
        model = User
        fields = ("id", "password", "email", "profile", "cars_count")
