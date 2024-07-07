from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Staff

user_routes = Blueprint('staff', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    staff = Staff.query.all()
    return {'staff': [staff.to_dict() for staff in staff]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a staff by id and returns that user in a dictionary
    """
    staff = Staff.query.get(id)
    return staff.to_dict()
