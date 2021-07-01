import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUserComment } from "../../store/videos";
import Button from "@material-ui/core/Button";

const CommentForm = ({ userId, newComment, setNewComment }) => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const commentSubmit = async (e) => {
    e.preventDefault();

    if (!sessionUser) history.push("/login");

    const userComment = {
      user_id: sessionUser?.id,
      content: comment,
    };

    await dispatch(postUserComment(userComment, videoId));
  };

  useEffect(() => {
    setComment("");

    return () => setNewComment(false);
  }, [newComment]);

  const newCommentSubmit = () => {
    return setTimeout(() => {
      console.log("hello");
      setNewComment(true);
    }, 10);
  };

  return (
    <div id="comment-form-div">
      <form method="post" id="comment-form" onSubmit={commentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="comment-text"
          placeholder="Comment"
          className="no-outline"
        ></textarea>
        <Button
          onClick={newCommentSubmit}
          id="comment-submit-button"
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
