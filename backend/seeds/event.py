from backend.models import db, Event, environment, SCHEMA
from sqlalchemy.sql import text
from backend.models.db import fake
from backend import db
from datetime import date
from random import randint, choice
import requests


def seed_events():
    start_date = date(2023, 12, 15)
    end_date = date(2024, 7, 7)

    for _ in range(5):

        new_event = Event(

            event_title=fake.name(),
            event_date=fake.date_between(
                start_date=start_date, end_date=end_date),
            event_time=fake.time('%H:%M'),
            event_location=fake.address(),
            event_desc=fake.paragraph(nb_sentences=2),
            event_img=fake.image_url()
        )
        db.session.add(new_event)
    db.session.commit()


def undo_events():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.event RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM event"))

    db.session.commit()
