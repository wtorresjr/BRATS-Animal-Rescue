from flask.cli import AppGroup
from .staff import seed_staff, undo_staff
from .rescue import seed_rescue, undo_rescue
from backend.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Function to create schema if it does not exist
def create_schema():
    if environment == "production":
        schema_sql = f"CREATE SCHEMA IF NOT EXISTS {SCHEMA};"
        with db.engine.connect() as conn:
            conn.execute(schema_sql)
            conn.execute(f"SET search_path TO {SCHEMA};")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    if environment == "production":
        create_schema()
        undo_staff()
        undo_rescue()
    seed_staff()
    seed_rescue()


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_staff()
    undo_rescue()
    # Add other undo functions here
