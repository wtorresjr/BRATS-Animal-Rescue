from .db import db, environment, SCHEMA
from werkzeug.security import generate_password_hash
from flask_login import UserMixin
from datetime import datetime, date
from sqlalchemy import Enum


class Rescue(db.Model, UserMixin):
    __tablename__ = "rescue"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    sex = db.Column(Enum('Male', 'Female', name='animal_sex'), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    animal_type = db.Column(Enum('Dog', 'Cat',
                                 name='animal_types'), nullable=False)
    animal_name = db.Column(db.String(30), nullable=False)
    can_adopt = db.Column(db.Boolean, nullable=False)

    rescue_date = db.Column(db.Date, nullable=False)
    story = db.Column(db.String(500), nullable=False)
    breed = db.Column(db.String(30), nullable=False)
    potty_trained = db.Column(db.Boolean, nullable=False)
    fixed = db.Column(db.Boolean, nullable=False)

    good_w_dogs = db.Column(db.Boolean, nullable=False)
    good_w_cats = db.Column(db.Boolean, nullable=False)
    good_w_kids = db.Column(db.Boolean, nullable=False)
    thumbnail_img = db.Column(db.String(), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "sex": self.sex,
            "age": self.age,
            "animal_type": self.animal_type,
            "animal_name": self.animal_name,
            "rescue_date": self.rescue_date,
            "story": self.story,
            "can_adopt": self.can_adopt,
            "breed": self.breed,
            "potty_trained": self.potty_trained,
            "fixed": self.fixed,
            "good_w_dogs": self.good_w_dogs,
            "good_w_cats": self.good_w_cats,
            "good_w_kids": self.good_w_kids,
            "thumbnail_img": self.thumbnail_img,
        }
