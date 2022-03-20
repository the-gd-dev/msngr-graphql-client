import React from "react";
import { CustomBtn } from "./CustomBtn";
import OptionsBox from "./OptionsBox";
import ReplyIcon from "./ReplyIcon";
import ThreeDotsV from "./ThreeDotsV";

const MessageSender = (props) => {
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
    <div className="chat__single__message flex w-full justify-end my-4">
      <div className="message flex space-x-2 items-center relative">
        <div className="__msg__options flex space-x-1">
          <CustomBtn
            onClick={() => props.optionStateHandler()}
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ThreeDotsV />
          </CustomBtn>
          <CustomBtn
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ReplyIcon />
          </CustomBtn>
        </div>
        <div className="msg-content bg-blue-500 text-white py-2 px-4 rounded-full">
          Tuitions hoti h yr... Abhi 26 tk to
        </div>
        {props.optionState === props.messageId ? (
          <OptionsBox
            customclassnames="top-12 left-0 w-24 "
            items={msgControlOptions}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MessageSender;
