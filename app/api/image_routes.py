import os
from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash
from flask_login import current_user, login_user, logout_user, login_required
from ..config import Config
from pathlib import Path

image_routes = Blueprint('images', __name__)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

@image_routes.route('/upload/<int:user_id>', methods=['POST'])
def image_upload(user_id):
    target=Config.UPLOAD_FOLDER
    image = request.files['image'] 
    filename = image.filename
    new_file = Path(f'{target}/{filename}').touch()
    destination="/".join([target, filename])
    # destination=target

    image.save(destination)
    session['uploadFilePath']=destination
    print(image)
     
    user = User.query.get(user_id)
    user.profile_img = destination
    db.session.add(user)
    db.session.commit()
    print(user.to_dict())

    return {"hello": "hello"}