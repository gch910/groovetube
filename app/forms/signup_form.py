from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[Email(message='Enter a valid email.'), DataRequired(), user_exists])
    password = PasswordField('password', validators=[DataRequired(), Length(min=6, message='Select a stronger password.'), EqualTo('confirm', message='Passwords must match.')])
    confirm = PasswordField('confirm')
    
