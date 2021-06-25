from django.urls import path
from .views import email_views

urlpatterns = [
    path('mail/', email_views)
]