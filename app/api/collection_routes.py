from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Video, User, user_collection

collection_routes = Blueprint("collection", __name__)

@collection_routes.route("/<int:video_id>/<int:user_id>", methods=['POST'])
def collection_add(video_id, user_id):
    new_video = Video.query.get(video_id)

    user = User.query.get(user_id)

    if new_video in user.video_collection:
        user.video_collection.remove(new_video)
    
    else:

        user.video_collection.append(new_video)

    db.session.add(user)
    db.session.commit()

    result_dict = {"collection": user.to_dict()["video_collection"]}

    return result_dict





