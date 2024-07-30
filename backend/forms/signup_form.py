from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from backend.models import Staff


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    staff = Staff.query.filter(Staff.email == email).first()
    if staff:
        raise ValidationError('Email address is already in use.')


class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    first_name = StringField(
        'first_name', validators=[DataRequired()])
    last_name = StringField(
        'last_name', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
