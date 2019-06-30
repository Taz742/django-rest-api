from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password

from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework import exceptions

from rest_framework_simplejwt.tokens import RefreshToken

from users.serializers import UserSerializer
from .serializers import LoginSerializer


UserModel = get_user_model()


class LoginView(GenericAPIView):
    """
    Provides login
    """

    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=self.request.data)
            serializer.is_valid(raise_exception=True)
            validated_data = serializer.validated_data
            email = validated_data.get('email')
            password = validated_data.get('password')
            user = UserModel.objects.get(email=email)
            if check_password(password, user.password):
                user_data = UserSerializer(user).data
                refresh = RefreshToken.for_user(user)
                return Response(data={"user": user_data, "access_token": str(refresh.access_token), "refresh_token": str(refresh)}, status=status.HTTP_200_OK)
            else:
                raise Exception("Given password is invalid")
        except Exception as e:
            raise exceptions.AuthenticationFailed({'detail': 'Invalid email or password'})


class RegistrationView(GenericAPIView):
    """
    Provides registration
    """

    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=self.request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            validated_data = serializer.validated_data
            user = UserModel.objects.get(email=validated_data["email"])
            user_data = UserSerializer(user).data
            refresh = RefreshToken.for_user(user)
            return Response(data={"user": user_data, "access_token": str(refresh.access_token), "refresh_token": str(refresh)}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(data={"error", "Uncaught error"}, status=status.HTTP_400_BAD_REQUEST)
