import React from "react";
import ProfilePicture from "../../../components/ProfilePicture";
import { CustomBtn } from "../../../components/CustomBtn";
import { ThreeDots } from "../../../components/ThreeDots";
import EditIcon from "../../../components/EditIcon";
import { useSelector } from "react-redux";
const ConvoCurrentUser = (props) => {
  const loggedInUser = useSelector((state) => state.auth.user);
  return (
    <div className="flex justify-between items-center space-x-2  w-full">
      <div className="mc__title__nd__dp flex items-center space-x-2">
        <ProfilePicture
          size="md"
          customclassnames="border-2"
          url={loggedInUser && loggedInUser.profilePicture}
        />
        <div className="text-2xl font-semibold">Chats</div>
      </div>
      {/* options */}
      <div className="flex items-center justify-around space-x-2">
        <CustomBtn
          customclassnames="bg-gray-100"
          size="sm"
          onClick={props.userOptionHandler}
        >
          <ThreeDots />
        </CustomBtn>
        <CustomBtn
          customclassnames="bg-gray-100"
          size="sm"
          onClick={props.newMessageHandler}
        >
          <EditIcon />
        </CustomBtn>
      </div>
    </div>
  );
};

export default ConvoCurrentUser;
