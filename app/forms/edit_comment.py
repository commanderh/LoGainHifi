from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired

class EditComment(FlaskForm):
    content = TextAreaField(validators=[DataRequired()])