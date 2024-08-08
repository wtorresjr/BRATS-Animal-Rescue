from backend.models import db, Staff, environment, SCHEMA
from backend.models.db import fake
from sqlalchemy.sql import text
from backend import db
from backend.models import Rescue
from datetime import date
from random import randint, choice
import requests


def get_img_thumb():
    rescue = ""
    randNum = choice([1, 2])

    if randNum == 1:
        rescue = "dog"
    else:
        rescue = "cat"

    url = "https://loremflickr.com/320/240/" + rescue

    response = requests.get(url)

    if response.status_code == 200:
        return response.url
        # print(response.url)
    else:
        print("Error", response.status_code)


def seed_rescue():
    start_date = date(2023, 12, 15)
    end_date = date(2024, 7, 7)

    for _ in range(9):

        animal_sex = choice(["Male", "Female"])

        if animal_sex == "Male":
            chosen_name = fake.first_name_male()
        else:
            chosen_name = fake.first_name_female()

        new_pet = Rescue(
            sex=animal_sex,
            animal_name=chosen_name,
            age=randint(1, 10),
            type=choice(["Dog", "Cat"]),
            rescue_date=fake.date_between(
                start_date=start_date, end_date=end_date),
            story=fake.paragraph(nb_sentences=6),
            breed=fake.last_name(),
            potty_trained=choice([True, False]),
            fixed=choice([True, False]),
            good_w_dogs=choice([True, False]),
            good_w_cats=choice([True, False]),
            good_w_kids=choice([True, False]),
            thumbnail_img=get_img_thumb()
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
