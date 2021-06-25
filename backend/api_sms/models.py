from django.db import models
from twilio.rest import Client
import os


class Notification(models.Model):
    name = models.CharField(max_length=100, default='user')
    userPhone = models.CharField(max_length=14)
    userMessage = models.CharField(max_length=1000, default='Some String')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        id = os.environ['TWILLIO_ID']
        auth = os.environ['TWILLIO_AUTH']
        fromPhone = os.environ['TWILLIO_FROM']
        print(self.userMessage, self.userPhone)
        client = Client(id, auth)
        client.messages.create(
            body=self.userMessage,
            from_=fromPhone,
            to=self.userPhone
        )

        return super().save(*args, **kwargs)
