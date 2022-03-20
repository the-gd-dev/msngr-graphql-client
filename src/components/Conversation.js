import React from "react";
import { CustomBtn } from "./CustomBtn";
import OptionsBox from "./OptionsBox";
import ProfileDetails from "./ProfileDetails";
import ProfilePicture from "./ProfilePicture";
import { ThreeDots } from "./ThreeDots";

const Conversation = (props) => {
  const conversationOptions = [
    {
      _id: 1,
      title: "Mark as read",
      clickHandler: () => {
        console.log("Mark as read-------------");
      },
    },
    {
      _id: 2,
      title: "Delete Chat",
      clickHandler: () => {
        console.log("Delete Chat-------------");
      },
    },
  ];
  let profilePictureUrl = `https://picsum.photos/id/1011/200/300`;
  return (
    <div className="z-5 hover:bg-gray-100 flex justify-between py-3 px-4 rounded-md relative cursor-pointer">
      <ProfileDetails username={`Rebbecca Larson`} profile_picture={profilePictureUrl}>
        <div className="text-gray-500">Lorem ipsum, dolor sit.</div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="text-gray-500">1 d</div>
      </ProfileDetails>
      <div className="single__card__ops space-x-2 items-center hidden xl:flex">
        <CustomBtn
          customclassnames="bg-white shadow-md border"
          size="sm"
          onClick={() => props.optionsToggleHandler(props.convoId)}
        >
          <ThreeDots />
        </CustomBtn>
        <ProfilePicture size="xsm" url={profilePictureUrl} />
      </div>
      {props.optionsToggleState === props.convoId ? (
        <OptionsBox
          customclassnames="top-16 right-10 w-36"
          items={conversationOptions}
        />
      ) : null}
    </div>
  );
};

export default Conversation;
