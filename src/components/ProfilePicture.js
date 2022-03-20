import React from "react";

const ProfilePicture = ({ size, url, customclassnames }) => {
  let _size = {
    xsm: "w-4 h-4",
    sm: "w-9 h-9",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };
  return (
    <div
      className={`${_size[size]} ${customclassnames} overflow-hidden rounded-full`}
    >
      <img src={url} alt="" />
    </div>
  );
};

export default ProfilePicture;
