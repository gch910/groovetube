import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';

const FollowButton = ({user, unfollow, following}) => {


  return (
    <Button
      id="follow-button"
      variant="contained"
      onClick={() => unfollow(following)}
    >
      Unfollow
    </Button>
  );
};

export default FollowButton;
