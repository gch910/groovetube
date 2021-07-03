from flask import Blueprint, jsonify, session, request
from app.models import User, Video, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("image", __name__)


@image_routes.route("/upload/<int:user_id>", methods=["POST"])
@login_required
def upload_image(user_id):
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    user = User.query.get(user_id)
    user.profile_img = url
    db.session.add(user)
    db.session.commit()
    return {"url": url}


@image_routes.route("/upload-video-image/<int:video_id>", methods=["POST"])
@login_required
def upload_video_image(video_id):
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    video = Video.query.get(video_id)
    video.img_path = url
    db.session.add(video)
    db.session.commit()
    return {"url": url}


