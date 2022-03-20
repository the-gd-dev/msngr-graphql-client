import React from "react";
import { CustomBtn } from "../../../components/CustomBtn";
import ProfileDetails from "../../../components/ProfileDetails";
import { ThreeDots } from "../../../components/ThreeDots";

const ChatHeader = (props) => {
  let profilePictureUrl = `https://picsum.photos/id/1011/200/300`;
  return (
    <div className="chat__header shadow-md  flex w-full justify-between items-center px-4">
      <div className="flex space-x-2 items-center py-3 rounded-md px-2">
        <ProfileDetails
          size="md"
          username={`Rebbecca Larson`}
          profile_picture={profilePictureUrl}
        >
          <div className="text-gray-500 leading-tight">Active 1d ago</div>
        </ProfileDetails>
      </div>
      <div className="chat__user__information">
        <CustomBtn
          onClick={props.uisbToggler}
          customclassnames={
            props.uisbState
              ? " bg-blue-600 text-white"
              : "hover:bg-gray-100 text-blue-600"
          }
          size="sm"
        >
          <ThreeDots />
        </CustomBtn>
      </div>
    </div>
  );
};

export default ChatHeader;
