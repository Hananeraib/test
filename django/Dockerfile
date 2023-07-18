FROM python:3.11-alpine

# allows the Python output to be sent straight to the terminal
# It also prevents issues such as the application crashing without giving relevant details
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /django
COPY requirements.txt ./
############################
RUN pip install --upgrade pip
# Installing required dependencies for PSYCOPG2 
RUN apk update && \
    apk add musl-dev python3-dev postgresql-dev gcc
############################
RUN pip install -r requirements.txt


COPY . .

# Run custom command to create superuser
# RUN python manage.py createsuperuser

CMD [ "sh", "-c", "python manage.py migrate && gunicorn core.wsgi:application --bind 0.0.0.0:8000"]