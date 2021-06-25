from django.shortcuts import render
from .models import Notification
from .serializers import NotificationSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 

@api_view(['GET', 'POST'])
def notification_views(request):

    if request.method  == 'GET':
        notification = Notification.objects.all()
        serializer = NotificationSerializer(notification, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = NotificationSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)