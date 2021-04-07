from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Category


def user_exists(form, field):
    print('Checking if user exists', field.data)
    user_id = field.data
    user = User.query.filter(User.id == user_id).first()
    if not user:
        raise ValidationError('User does not exist')


def category_exists(form, field):
    print('Checking if user exists', field.data)
    category_id = field.data
    category = Category.query.filter(Category.id == category_id).first()
    if not category:
        raise ValidationError('Category does not exist')


class VideoForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    artist = StringField('artist', validators=[DataRequired()])
    video_path = StringField('video_path', validators=[DataRequired()])
    img_path = StringField('img_path')
    gif_path = StringField('gif_path')
    user_id = IntegerField('user_id', validators=[DataRequired(), user_exists])
    category_id = IntegerField('category_id', validators=[
                            DataRequired(), category_exists])