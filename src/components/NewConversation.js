import React from "react";
import { CustomBtn } from "./CustomBtn";
import OptionsBox from "./OptionsBox";
import ProfileDetails from "./ProfileDetails";
import TrashIcon from "./TrashIcon";

const NewConversation = (props) => {
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
  let profilePictureUrl = `https://picsum.photos/id/1025/200/300`;
  return (
    <div className="z-5 hover:bg-gray-100 flex justify-between py-3 px-4 rounded-md relative cursor-pointer bg-gray-100">
      <ProfileDetails
        username={props.conversation.name}
        profile_picture={profilePictureUrl}
      ></ProfileDetails>
      <div className="single__card__ops space-x-2 items-center hidden xl:flex">
        <CustomBtn customclassnames="bg-white shadow-md border" size="sm">
          <TrashIcon />
        </CustomBtn>
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

export default NewConversation;
