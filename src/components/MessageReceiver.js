import React from "react";
import { CustomBtn } from "./CustomBtn";
import OptionsBox from "./OptionsBox";
import ProfilePicture from "./ProfilePicture";
import ReplyIcon from "./ReplyIcon";
import ThreeDotsV from "./ThreeDotsV";

export const MessageReceiver = (props) => {
  let profilePictureUrl = `https://picsum.photos/id/1011/200/300`;
  const msgControlOptions = [
    {
      _id: 1,
      title: "Edit",
      clickHandler: () => {
        console.log("Edit message");
      },
    },
    {
      _id: 2,
      title: "Delete",
      clickHandler: () => {
        console.log("Delte message");
      },
    },
  ];
  return (
    <div className="chat__single__message flex w-full justify-start my-4">
      <div className="message flex space-x-2 items-center relative z-5">
        <ProfilePicture size={"sm"} url={profilePictureUrl} />
        <div className="msg-content bg-gray-100 py-2 px-4 rounded-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="__msg__options flex space-x-1">
          <CustomBtn
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ReplyIcon />
          </CustomBtn>
          <CustomBtn
            onClick={() => props.optionStateHandler()}
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ThreeDotsV />
          </CustomBtn>
        </div>
        {props.optionState === props.messageId ? (
          <OptionsBox
            customclassnames="-top-20 -right-16 w-24 "
            items={msgControlOptions}
          />
        ) : null}
      </div>
    </div>
  );
};
