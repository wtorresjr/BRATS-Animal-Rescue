from flask.cli import AppGroup
from .staff import seed_staff, undo_staff
from .rescue import seed_rescue, undo_rescue

# from .daily_charts import seed_daily_charts, undo_daily_charts
# from .discreet_trials import seed_discreet_trials, undo_discreet_trials

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    if environment == "production":
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
