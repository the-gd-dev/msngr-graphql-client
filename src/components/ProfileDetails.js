import React from "react";
import ProfilePicture from "./ProfilePicture";

const ProfileDetails = (props) => {
  return (
    <div className={`single__details flex space-x-2 items-center`}>
      <ProfilePicture size={props.size || 'lg'} url={props.profile_picture} />
      <div className="flex flex-col">
        <div className="text-md leading-tight">{props.username}</div>
        <div className="__last__message flex space-x-2 items-center text-sm leading-tight">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
