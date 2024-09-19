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
