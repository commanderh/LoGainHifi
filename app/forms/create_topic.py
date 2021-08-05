from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired

class CreateTopic(FlaskForm):
    title = StringField(validators=[DataRequired()])
    body = TextAreaField(validators=[DataRequired()])
    user_id = IntegerField(validators=[DataRequired()])
    category_id = IntegerField(validators=[DataRequired()])
