from .db import db, environment, SCHEMA
from werkzeug.security import generate_password_hash
from flask_login import UserMixin
from datetime import datetime, date


class Sponsor(db.Model, UserMixin):
    __tablename__ = "sponsor"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)

    sponsor_name = db.Column(db.String(75), nullable=False)
    sponsor_site = db.Column(db.String(), nullable=False)
    sponsor_img = db.Column(db.String(), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "sponsor_name": self.sponsor_name,
            "sponsor_site": self.sponsor_site,
            "sponsor_img": self.sponsor_img
        }
