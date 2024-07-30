import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY") or "mysecretkey"
    FLASK_RUN_PORT = os.environ.get("FLASK_RUN_PORT")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    # if SQLALCHEMY_DATABASE_URI.startswith("postgres://"):
    #     SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace(
    #         "postgres://", "postgresql://", 1)

    SQLALCHEMY_DATABASE_URI = "sqlite:///dev.db"


    SQLALCHEMY_ECHO = True
    print(SQLALCHEMY_DATABASE_URI, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
