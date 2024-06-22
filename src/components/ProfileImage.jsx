import React from "react";
import Profile from "../profile.png";

function ProfileImage() {
  return (
    <div className="profile-image w-48 h-48 rounded-full mx-auto  md:w-64 md:h-64">
      {Profile}
    </div>
  );
}

export default ProfileImage;
