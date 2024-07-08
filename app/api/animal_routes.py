from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Rescue, db


animal_routes = Blueprint("animals", __name__)


@animal_routes.route("/", methods=["GET"])
def get_all_animals():
    
    animals_found = Rescue.query.all()
    
    if not animals_found:
        return jsonify({"message":"No animals found"})
    
    animals = [animal.to_dict() for animal in animals_found]
      
    return animals



@animal_routes.route("/<int:animal_id>", methods=["GET"])
def get_animal_by_id(animal_id):
    
    animal_found = Rescue.query.filter_by(id=animal_id).all()
    
    result = [animal.to_dict() for animal in animal_found]
    
    return result