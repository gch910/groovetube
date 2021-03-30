"""empty message

Revision ID: 70a7fec6aadc
Revises: 
Create Date: 2021-03-30 12:44:01.076233

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '70a7fec6aadc'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('likes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('liked', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('follows',
    sa.Column('follow_a_id', sa.Integer(), nullable=False),
    sa.Column('follow_b_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['follow_a_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['follow_b_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('follow_a_id', 'follow_b_id')
    )
    op.create_table('videos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('video_path', sa.String(length=1000), nullable=False),
    sa.Column('thumbnail_path', sa.String(length=1000), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['category_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('video_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=1000), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['video_id'], ['videos.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('videos')
    op.drop_table('follows')
    op.drop_table('users')
    op.drop_table('likes')
    op.drop_table('categories')
    # ### end Alembic commands ###
