from django.db import models
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os


class SendEmail(models.Model):
    name = models.CharField(max_length=100, default='user')
    userEmail = models.CharField(max_length=100)
    userMessage = models.CharField(max_length=1000, default='Some String')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        id = os.environ['SENDGRID_ID']
        mail_from = os.environ['SENDGRID_FROM']
        message = Mail(
            from_email='mail_from',
            to_emails=self.userEmail,
            subject='no-repy(sent from sendgrid)',
            plain_text_content='Hi',
            html_content=self.userMessage
        )

        try:
            sg = SendGridAPIClient(id)
            response = sg.send(message)

        except Exception as err:
            print(err)

        return super().save(*args, **kwargs)
