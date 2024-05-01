import requests
import json

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView

from django.contrib.auth.models import User
from .serializers import UserSerializer


class UserCreateAPIView(generics.CreateAPIView):

    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data.get("username")
        if User.objects.filter(username=username).exists():
            return Response(
                {"status_code": 6001, "message": "Username is Already Registered"}
            )

        self.perform_create(serializer)
        user = serializer.instance

        token = self.generate_token(user)
        if token:
            return Response(
                {
                    "status_code": 6000,
                    "data": {"user": serializer.data, "token_data": token},
                }
            )
        else:
            return Response({"status_code": 6001, "message": "An Error Occurred"})

    def perform_create(self, serializer):
        serializer.save()

    def generate_token(self, user):
        url = self.request.build_absolute_uri("/api/v1/auth/token/")
        headers = {"Content-Type": "application/json"}
        data = {
            "username": user.username,
            "password": self.request.data.get("password"),
        }
        response = requests.post(url, data=json.dumps(data), headers=headers)

        if response.status_code == 200:
            return response.json()
        else:
            return None

