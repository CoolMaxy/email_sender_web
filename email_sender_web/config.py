import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_super_secret_key_here' # Change this in production
    UPLOAD_FOLDER = 'uploads'
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024 # 16 MB limit for uploads