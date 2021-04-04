import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUserComment } from "../../store/videos";

const CommentForm = ({ userId, newComment, setNewComment }) => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
//   const likes = useSelector((state) => state.songs.likes);
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

//   const likeSong = (e) => {
//     e.preventDefault();
//     dispatch(userLike(videoId, userId));
//     return setTimeout(() => {
//       setLiked(true)
//     }, 100)
    
//   };

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
  }, [newComment]);

  const newCommentSubmit = () => {
    return setTimeout(() => {
      console.log("hello");
      setNewComment(true);
    }, 10);
  };

  return (
    <div id="comment-form-div">
      {/* <div id="like-button-div">
         {liked ? <button onClick={likeSong} id="heart-button">Liked<i className="fas fa-heart"></i></button> : <button onClick={likeSong} id="heart-button">Like<i className="far fa-heart"></i></button>}
      </div> */}
      <form method="post" id="comment-form" onSubmit={commentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="comment-text"
          placeholder="Comment"
        ></textarea>
        <button
          onClick={newCommentSubmit}
          id="comment-submit-button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
