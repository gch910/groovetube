from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, follows

follow_routes = Blueprint("follow", __name__)




@follow_routes.route("/following/<int:user_id>")
def get_following(user_id):
    user = User.query.get(user_id)

    result_dict = {f"{user.to_dict()['username']}'s following": user.to_dict["following"]}

    return result_dict


