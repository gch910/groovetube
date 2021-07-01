import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserComment } from "../../store/videos";
import "./VideoPage.css";

const Comments = ({ video, sessionUser, setDeleted }) => {
  const dispatch = useDispatch();

  const [deleteShown, setDeleteShown] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const buttonClassname = (index) => {
    if (index === hoverIndex) return "active";
    else return "button inactive";
  };

  const deleteComment = (e) => {
    if (sessionUser?.id == e.target.className.split(" ")[1]) {
      dispatch(deleteUserComment(e.target.id));
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
      }, 100);
    }
  };

  return (
    <div id="comments-div">
      <h3>{video?.comments[0] ? "Comments:" : "Be the First to Comment!"}</h3>
      {video?.comments.map((comment, idx) => (
        <div
          className="comment-div"
          onMouseEnter={() => (setDeleteShown(true), setHoverIndex(idx))}
          onMouseLeave={() => (setDeleteShown(false), setHoverIndex(null))}
        >
          <div id="image-username-comment">
            <img
              id="user-comment-image"
              src={comment.user.profile_img}
              alt="profile"
            />
            <Link to={`/users/${comment?.user?.id}`} id="comment-username-link">
              <h3 id="comment-username">{comment.user.username}:</h3>
            </Link>
            <p id="comment-p">{comment.content}</p>
          </div>
          {deleteShown && sessionUser?.id == comment.user_id && (
            <button
              className={`delete-comment-button ${
                comment.user_id
              } ${buttonClassname(idx)} no-outline`}
              id={comment.id}
              userId={comment.user_id}
              onClick={deleteComment}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
