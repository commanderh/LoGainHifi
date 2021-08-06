from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired

class CreateComment(FlaskForm):
    content = TextAreaField(validators=[DataRequired()])
    user_id = IntegerField(validators=[DataRequired()])
    topic_id = IntegerField(validators=[DataRequired()])
