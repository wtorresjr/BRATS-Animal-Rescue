from app.models import db, Staff, environment, SCHEMA
from app.models.db import fake
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_staff():
    # Create the table if it doesn't exist
    demouser = Staff(
        first_name="Demo",
        last_name="User",
        email="demo@demo.com",
        password="password",
    )
    db.session.add(demouser)

    for _ in range(2):
        demo = Staff(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            password="password",
        )
        db.session.add(demo)

    db.session.commit()


def undo_staff():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.staff RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM staff"))

    db.session.commit()
