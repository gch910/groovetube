import React from "react";
import Button from "@material-ui/core/Button";

const ButtonDiv = ({
  addFollow,
  addVideo,
  userVideos,
  video,
  sessionUser,
  isFollowing,
}) => {
  return (
    <div id="add-video-button-div">
      <Button id="add-button" variant="contained" onClick={addVideo}>
        {userVideos?.some((vid) => vid.id == video.id) ? "Added" : "Add"}
      </Button>
      {video.user.id !== sessionUser.id && (
        <Button
          id="follow-button"
          variant="contained"
          onClick={() => addFollow()}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </div>
  );
};

export default ButtonDiv;
