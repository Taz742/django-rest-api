from celery import shared_task
from celery.utils.log import get_task_logger
from api.send_email import send_feedback_email
from api.celery import app


logger = get_task_logger(__name__)

@shared_task
def add(x, y):
    return x + y

@shared_task(bind=True)
def print_hello(self):
    # raise Exception()
    print('print hello called', self.request.id)
    return 3

@shared_task
def send_email_task():
    send_feedback_email()