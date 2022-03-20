import React from "react";
import { CustomBtn } from "./CustomBtn";
import ReplyIcon from "./ReplyIcon";
import ThreeDotsV from "./ThreeDotsV";

const MessageSender = () => {
  return (
    <div className="chat__single__message flex w-full justify-end my-4">
      <div className="message flex space-x-2 items-center">
        <div className="__msg__options flex space-x-1">
          <CustomBtn
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ReplyIcon />
          </CustomBtn>
          <CustomBtn
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ThreeDotsV />
          </CustomBtn>
        </div>
        <div className="msg-content bg-blue-500 text-white py-2 px-4 rounded-full">
          Tuitions hoti h yr... Abhi 26 tk to
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
