from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories
from .seed_videos import seed_videos
from .collections import seed_collection
from .aws_upload import upload_file_to_s3



# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_videos()
    seed_collection()
    upload_file_to_s3("/images/paak1.jpg")
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
