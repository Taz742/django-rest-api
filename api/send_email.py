from django.core.mail import EmailMessage


def send_feedback_email():
    email = EmailMessage('you are logged in', 'hi taz :)', to=['taz742b@gmail.com'])
    email.send()
