from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password

from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework import exceptions

from users.serializers import UserSerializer
from .serializers import LoginSerializer


# Create your views here.
class LoginView(GenericAPIView):
    """
    Provides login
    """

    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def get_response(self):
        user = UserSerializer(self.user)
        data = {
            'user': user.data,
            'token': self.token.key
        } 
        
        return Response(data=data, status=status.HTTP_200_OK)

    def login(self):
        validated_data = self.serializer.validated_data
        username = validated_data.get('username')
        password = validated_data.get('password')

        try:
            user = User.objects.get(username=username)
            if check_password(password, user.password):
                token, crated = Token.objects.get_or_create(user=user)
                self.user = user
                self.token = token
            else:
                raise Exception()
        except Exception as e:
            raise exceptions.AuthenticationFailed('Invalid username or password')

    def post(self, request, *args, **kwargs):
        self.request = request
        self.serializer = self.get_serializer(data=self.request.data)
        self.serializer.is_valid(raise_exception=True)
        
        self.login()

        return self.get_response()