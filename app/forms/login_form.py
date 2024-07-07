from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Staff


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    staff = Staff.query.filter(Staff.email == email).first()
    if not staff:
        raise ValidationError("Login incorrect.")


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data["email"]
    staff = Staff.query.filter(Staff.email == email).first()
    if not staff:
        raise ValidationError('Login incorrect')
    if not staff.check_password(password):
        raise ValidationError("Password was incorrect.")


class LoginForm(FlaskForm):
    email = StringField("email", validators=[DataRequired(), user_exists])
    password = StringField("password", validators=[DataRequired(), password_matches])
