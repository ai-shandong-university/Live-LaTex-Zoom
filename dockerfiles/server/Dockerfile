# Base ENV
FROM python:3.7-slim

# set workdir to /app
WORKDIR /app

# Copy the current directory contents at /app
COPY . /app

# Install needed package
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this contaner
EXPOSE 8888

# Define environment variable
ENV NAME World

# Run app.py when it lanches
CMD ["python", "app.py"]
