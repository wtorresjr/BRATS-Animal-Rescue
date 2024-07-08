"""empty message

Revision ID: 0775b9b7ade0
Revises: 
Create Date: 2024-02-07 22:50:04.090286

"""
from sqlalchemy import Enum
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0775b9b7ade0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('staff',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=30), nullable=False),
    sa.Column('last_name', sa.String(length=35), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'))
    
    op.create_table("rescue",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("animal_name", sa.String(length=30), nullable=False),
        sa.Column("age", sa.Integer(), nullable=False),
        sa.Column("type", Enum('Dog', 'Cat', 'Parrot', name='animal_types'), nullable=False),
        sa.Column("sex", Enum('Male', 'Female', name='animal_sex'), nullable=False),
        sa.Column("rescue_date", sa.Date(), nullable=False),
        sa.Column("story", sa.String(length=500), nullable=False),
        sa.Column("breed", sa.String(length=30), nullable=False),
        sa.Column("potty_trained", sa.Boolean(), nullable=False),
        sa.Column("fixed", sa.Boolean(), nullable=False),
        sa.Column("good_w_dogs", sa.Boolean(), nullable=False),
        sa.Column("good_w_cats", sa.Boolean(), nullable=False),
        sa.Column("good_w_kids", sa.Boolean(), nullable=False),
        sa.Column("thumbnail_img", sa.String(), nullable=False),
    )

    

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('staff')
    op.drop_table("rescue")
    # ### end Alembic commands ###
