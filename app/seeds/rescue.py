from app.models import db, Staff, environment, SCHEMA
from app.models.db import fake
from sqlalchemy.sql import text
from random import randint, choice
from app import db
from app.models import Rescue
from datetime import date


def seed_rescue():
    start_date = date(2023, 12, 15)
    end_date = date(2024, 7, 7)
    
    
    for _ in range(9):
        
        animal_sex = choice(["Male","Female"])
        
        if animal_sex == "Male":
            chosen_name = fake.first_name_male()
        else:
            chosen_name = fake.first_name_female()

        
        new_pet = Rescue(
            sex=animal_sex,
            animal_name=chosen_name,
            age=randint(1, 10),
            type=choice(["Dog", "Cat"]),
            rescue_date=fake.date_between(start_date=start_date, end_date=end_date),
            story=fake.paragraph(nb_sentences=6),
            breed=fake.last_name(),
            potty_trained=choice([True, False]),
            fixed=choice([True, False]),
            good_w_dogs=choice([True, False]),
            good_w_cats=choice([True, False]),
            good_w_kids=choice([True, False]),
            thumbnail_img="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        )
        db.session.add(new_pet)
    db.session.commit()



def undo_rescue():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.rescue RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM rescue"))

    db.session.commit()
    