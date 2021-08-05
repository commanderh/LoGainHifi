from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired

class EditTopic(FlaskForm):
    title = StringField(validators=[DataRequired()])
    body = TextAreaField(validators=[DataRequired()])