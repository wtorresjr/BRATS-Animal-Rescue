from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Rescue, db
from datetime import date


animal_routes = Blueprint("animals", __name__)


@animal_routes.route("/", methods=["GET"])
def get_all_animals():
    animals_found = Rescue.query.all()

    if not animals_found:
        return jsonify({"message": "No animals found"})

    # Reverse the order of the animals
    animals = [animal.to_dict() for animal in reversed(animals_found)]

    return jsonify(animals)


@animal_routes.route("/", methods=["POST"])
def create_animal():

    new_animal = request.json

    int_val = new_animal["rescue_date"].split("-")
    year = int(int_val[0])
    month = int(int_val[1])
    day = int(int_val[2])
    rescue_date = date(year, month, day)

    create_pet = Rescue(
        age=new_animal["age"],
        animal_name=new_animal["animal_name"],
        breed=new_animal["breed"],
        fixed=new_animal["fixed"],
        good_w_cats=new_animal["good_w_cats"],
        good_w_dogs=new_animal["good_w_dogs"],
        good_w_kids=new_animal["good_w_kids"],
        potty_trained=new_animal["potty_trained"],
        rescue_date=rescue_date,
        sex=new_animal["sex"],
        story=new_animal["story"],
        thumbnail_img=new_animal["thumbnail_img"],
        type=new_animal["type"]
    )

    db.session.add(create_pet)
    db.session.commit()

    return jsonify({"message": "Successfully created new animal!"})


@animal_routes.route("/<int:animal_id>", methods=["PUT", "DELETE"])
def animal_operations_by_id(animal_id):

    animal_found = Rescue.query.filter_by(id=animal_id).first()

    if not animal_found:
        return jsonify({"message": f"Error: Animal ID {animal_id} cannot be found."})

    if request.method == "PUT":

        user_changes = request.json
        for key, value in user_changes.items():
            if hasattr(animal_found, key):
                # Convert string date to date object
                if key == "rescue_date":
                    int_val = value.split("-")
                    year = int(int_val[0])
                    month = int(int_val[1])
                    day = int(int_val[2])
                    new_val = date(year, month, day)
                    setattr(animal_found, key, new_val)
                else:
                    setattr(animal_found, key, value)
        db.session.commit()

        return jsonify({"Successful Changes": user_changes})

    if request.method == "DELETE":
        db.session.delete(animal_found)
        db.session.commit()

        return jsonify({"message": f"Animal ID {animal_id} was successfully deleted."})


@animal_routes.route("/<int:animal_id>", methods=["GET"])
def get_animal_by_id(animal_id):
    animal_found = Rescue.query.filter_by(id=animal_id).first()

    if not animal_found:
        return jsonify({"message": f"Error: Animal ID {animal_id} cannot be found."})

    return animal_found.to_dict()
