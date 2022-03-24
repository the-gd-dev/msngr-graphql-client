import React from "react";
import config from "../config";

const ProfilePicture = (props) => {
  let dummyUrl = config.assetURI + "default.webp";
  const { size, url, customclassnames } = props;
  let _size = {
    xsm: "w-4 h-4",
    sm: "w-9 h-9",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
    xxl: "w-28 h-28",
  };
  return (
    <div
      {...props}
      className={`${_size[size]} ${customclassnames} overflow-hidden rounded-full`}
    >
      <img src={url || dummyUrl} className="w-full h-full object-cover" />
    </div>
  );
};

export default ProfilePicture;
