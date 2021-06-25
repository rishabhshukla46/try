from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from .models import SendEmail
from .serializers import SendEmailSerializer


@api_view(['GET', 'POST'])
def email_views(request):
    if request.method  == 'GET':
        notification = SendEmail.objects.all()
        serializer = SendEmailSerializer(notification, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = SendEmailSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)