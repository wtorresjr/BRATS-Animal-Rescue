from flask import Blueprint, jsonify, request
from flask_login import login_required
from backend.models import Event, db
from datetime import date


event_routes = Blueprint("events", __name__)


@event_routes.route("/<int:event_id>", methods=["DELETE"])
def delete_event(event_id):
    event_to_delete = Event.query.filter_by(id=event_id).first()

    if not event_to_delete:
        return jsonify({"message": f"Event ID {event_id} could not be found."})

    db.session.delete(event_to_delete)
    db.session.commit()

    return jsonify({"message": f"Successfully Deleted Event # {event_id}"})


@event_routes.route("/", methods=["GET"])
def get_all_events():
    events_found = Event.query.all()

    if not events_found:
        return jsonify({"message": "No Events Found"})

    events = [event.to_dict() for event in reversed(events_found)]

    return jsonify(events)


@event_routes.route("/", methods=["POST"])
def create_event():

    new_event = request.json

    create_event = Event(
        event_title=new_event["event_title"],
        event_date=new_event["event_date"],
        event_time=new_event["event_time"],
        event_location=new_event["event_location"],
        event_desc=new_event["event_desc"],
        event_img=new_event["event_img"]
    )

    db.session.add(create_event)
    db.session.commit()

    return jsonify({"message": f"Created new event {create_event.to_dict()}"})


@event_routes.route("/<int:event_id>", methods=["PUT"])
def edit_event(event_id):

    event_to_edit = Event.query.filter_by(id=event_id).first()

    if not event_to_edit:
        return jsonify({"message": f"Cound Not Find Event# {event_id}"})

    edits_to_event = request.json

    for key, value in edits_to_event.items():
        if hasattr(event_to_edit, key):
            setattr(event_to_edit, key, value)

    db.session.commit()

    return jsonify({"message": f"Successfully made the changes below {edits_to_event}"})
