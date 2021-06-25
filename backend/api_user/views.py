from django.shortcuts import render
from rest_framework import generics
from .models import UserData
from .serializers import UserSerializer
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse

class UserList(generics.ListCreateAPIView):
  queryset = UserData.objects.all()
  serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = UserData.objects.all()
  serializer_class = UserSerializer