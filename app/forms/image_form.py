from flask_wtf import FlaskForm
from wtforms import StringField, FileField
# from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User




class ImageForm(FlaskForm):
   image = FileField('image')