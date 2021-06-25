from django.db import models

# Create your models here.
class UserData(models.Model):
    name = models.CharField(max_length=100)
    userId = models.CharField(max_length=100)
    userEmail = models.CharField(max_length=100)
    userPhone = models.CharField(max_length=100)
    EMAIL = 'email'
    PHONE = 'phone'
    NONE = 'none'
    PREFERENCE_CHOICES = [
        (EMAIL, 'email'),
        (PHONE, 'phone'),
        (NONE, 'none')
    ]
    notify = models.CharField(
        max_length=10,
        choices=PREFERENCE_CHOICES,
        default=EMAIL,
    )

    def __str__(self):
        return self.name