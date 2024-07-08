from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Rescue


animal_routes = Blueprint("animals", __name__)


@animal_routes.route("/")
def get_all_animals():
    return jsonify({"Success":"Route Reached"})