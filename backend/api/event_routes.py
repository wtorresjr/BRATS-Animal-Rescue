from flask import Blueprint, jsonify, request
from flask_login import login_required
from backend.models import Event, db
from datetime import date


event_routes = Blueprint("events", __name__)


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

    # int_val = new_event["event_date"].split("-")
    # year = int(int_val[0])
    # month = int(int_val[1])
    # day = int(int_val[2])
    # event_date = date(year, month, day)

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
