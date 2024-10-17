from backend.models import db, Sponsor, environment, SCHEMA
from sqlalchemy.sql import text
from backend.models.db import fake
from backend import db
from datetime import date
from random import randint, choice
import requests


def seed_sponsors():
    for _ in range(5):

        new_sponsor = Sponsor(

            sponsor_name=fake.name(),
            sponsor_img=fake.image_url(),
            sponsor_site=fake.image_url()
        )
        db.session.add(new_sponsor)
    db.session.commit()


def undo_sponsors():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.event RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM sponsor"))

    db.session.commit()
