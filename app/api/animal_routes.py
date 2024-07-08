from flask import Blueprint, jsonify, request
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



@animal_routes.route("/<int:animal_id>", methods=["PUT","DELETE"])
def animal_operations_by_id(animal_id):
    
    animal_found = Rescue.query.filter_by(id=animal_id).first()
    
    if not animal_found:
        return jsonify({"message":f"Error: Animal ID {animal_id} cannot be found."})
    
    if request.method == "PUT":
        return jsonify({"message":"EDIT ROUTE REACHED"})
 
    if request.method == "DELETE":
        db.session.delete(animal_found)
        db.session.commit()
        
        return jsonify({"message":f"Animal ID {animal_id} was successfully deleted."})



@animal_routes.route("/<int:animal_id>", methods=["GET"])
def get_animal_by_id(animal_id):
    animal_found = Rescue.query.filter_by(id=animal_id).first()
    
    if not animal_found:
        return jsonify({"message":f"Error: Animal ID {animal_id} cannot be found."})
    
    return animal_found.to_dict()
    
    