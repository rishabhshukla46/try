from rest_framework import serializers
from .models import UserData

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserData
    fields = ['id', 'name', 'userId', 'notify', 'userEmail', 'userPhone']