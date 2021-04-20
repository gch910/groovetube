import React from "react";

const UserHeader = ({user, text}) => {
    const changeImg = (e) => {
        e.target.src = "https://static.thenounproject.com/png/396915-200.png";
      };
    return (
        <div className="profile-header-div">
        <img
          onMouseEnter={(e) => changeImg(e)}
          onMouseLeave={(e) => e.target.src = user?.profile_img}
          className="profile-page-img"
          src={user?.profile_img}
        />
        {text}
      </div>
    )
}

export default UserHeader;