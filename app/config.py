import os

class Config:
  SECRET_KEY=os.environ.get('SECRET_KEY')
  YOUTUBE_API_KEY=os.environ.get('YOUTUBE_API_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS=False
  SQLALCHEMY_DATABASE_URI=os.environ.get('DATABASE_URL')
  SQLALCHEMY_ECHO=True
  UPLOAD_FOLDER = 'react-app/src/components/Home/profile-pics'
  