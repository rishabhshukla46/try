from django.urls import path
from .views import notification_views

urlpatterns = [
    path('sms/', notification_views)
]