from .db import db, environment, SCHEMA
from werkzeug.security import generate_password_hash
from flask_login import UserMixin
from datetime import datetime, date


class Event(db.Model, UserMixin):
    __tablename__ = "event"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)

    event_title = db.Column(db.String(75), nullable=False)
    event_date = db.Column(db.String(), nullable=False)
    event_time = db.Column(db.String(), nullable=False)
    event_location = db.Column(db.String(120), nullable=False)
    event_desc = db.Column(db.String(500), nullable=False)
    event_img = db.Column(db.String(), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "event_title": self.event_title,
            "event_date": self.event_date,
            "event_time": self.event_time,
            "event_location": self.event_location,
            "event_desc": self.event_desc,
            "event_img": self.event_img
        }
