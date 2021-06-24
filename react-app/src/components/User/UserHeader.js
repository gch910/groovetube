import React from "react";
import { useHistory } from "react-router-dom";

export const UserHeader = ({ user, text }) => {
  const history = useHistory();
  const changeImg = (e) => {
    e.target.src = "https://static.thenounproject.com/png/396915-200.png";
  };
  return (
    <div className="profile-header-div">
      <img
        onMouseEnter={(e) => changeImg(e)}
        onMouseLeave={(e) => (e.target.src = user?.profile_img)}
        onClick={(e) => history.push(`/profile-image/upload/${user?.id}`)}
        className="profile-page-img"
        src={user?.profile_img}
      />
      {text}
    </div>
  );
};

export const NotSessionHeader = ({ user, text }) => {
  return (
    <div className="profile-header-div">
      <img className="profile-page-img" src={user?.profile_img} />
      {text}
    </div>
  );
};
