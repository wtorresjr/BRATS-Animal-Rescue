from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Rescue, db


animal_routes = Blueprint("animals", __name__)


@animal_routes.route("/", methods=["GET"])
def get_all_animals():
    
    
    animals_found = Rescue.query.all()
    
    animals = [animal.to_dict() for animal in animals_found]
      
    return animals