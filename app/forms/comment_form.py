from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError



class CommentForm(FlaskForm):
    content = TextAreaField("content", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    video_id = IntegerField("video_id", validators=[DataRequired()])