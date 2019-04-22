from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token


# Create your views here.
class AuthenticationView(APIView):
    """
    Provides authentication
    """

    permission_classes = [AllowAny]

    def get(self, request):
        username = request.query_params.get('username')
        password = request.query_params.get('password')

        if username is None or password is None:
            return Response('Invalid data: username or password does not provided', status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(username=username)
            if check_password(password, user.password):
                token, created = Token.objects.get_or_create(user=user)
                return Response(token.key, status=status.HTTP_200_OK)
            
            raise Exception()
        except Exception as e:
            print(e)
            return Response('Invalid username/password', status=status.HTTP_401_UNAUTHORIZED)
    
    def post(self, request):
        pass