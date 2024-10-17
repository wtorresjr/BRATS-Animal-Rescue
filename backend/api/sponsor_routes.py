from flask import Blueprint, jsonify, request
from flask_login import login_required
from backend.models import Sponsor, db
from datetime import date


sponsor_routes = Blueprint("sponsors", __name__)


@sponsor_routes.route("/", methods=["GET"])
def get_sponsors():
    found_sponsors = Sponsor.query.all()

    if not found_sponsors:
        return jsonify({"message": f"No Sponsors Found"})

    sponsors = [sponsor.to_dict() for sponsor in reversed(found_sponsors)]

    return jsonify(sponsors)


@sponsor_routes.route("/<int:sponsor_id>", methods=["DELETE"])
def delete_sponsor(sponsor_id):
    sponsor_to_delete = Sponsor.query.filter_by(id=sponsor_id).first()

    if not sponsor_to_delete:
        return jsonify({"message": f"Sponsor ID {sponsor_id} could not be found."})

    db.session.delete(sponsor_to_delete)
    db.session.commit()

    return jsonify({"message": f"Successfully Deleted Sponsor # {sponsor_id}"})


@sponsor_routes.route("/", methods=["POST"])
def add_sponsor():

    new_sponsor = request.json

    create_sponsor = Sponsor(
        sponsor_name=new_sponsor["sponsor_name"],
        sponsor_site=new_sponsor["sponsor_site"],
        sponsor_img=new_sponsor["sponsor_img"]
    )

    db.session.add(create_sponsor)
    db.session.commit()

    return jsonify({"message": f"Created new sponsor {create_sponsor.to_dict()}"})


@sponsor_routes.route("/<int:sponsor_id>", methods=["PUT"])
def edit_sponsor(sponsor_id):

    sponsor_to_edit = Sponsor.query.filter_by(id=sponsor_id).first()

    if not sponsor_to_edit:
        return jsonify({"message": f"Could not find sponsor # {sponsor_id}"})

    edit_sponsor_data = request.json

    for key, value in edit_sponsor_data.items():
        if hasattr(sponsor_to_edit, key):
            setattr(sponsor_to_edit, key, value)

    db.session.commit()

    return jsonify({"message": f"Successfully made changes {edit_sponsor_data}"})
