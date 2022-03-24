import React from "react";
import { CustomBtn } from "../../../components/CustomBtn";
import ProfileDetails from "../../../components/ProfileDetails";
import { ThreeDots } from "../../../components/ThreeDots";

const ChatHeader = (props) => {
  let { userData, uisbToggler, uisbState } = props;
  return (
    <div className="chat__header shadow-md  flex w-full justify-between items-center px-4">
      <div className="flex space-x-2 items-center py-3 rounded-md px-2">
        <ProfileDetails
          size="md"
          username={userData && userData.name}
          profile_picture={userData && userData.profilePicture}
        >
          {/* <div className="text-gray-500 leading-tight">Active 1d ago</div> */}
        </ProfileDetails>
      </div>
      <div className="chat__user__information">
        <CustomBtn
          onClick={uisbToggler}
          customclassnames={
            uisbState
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
