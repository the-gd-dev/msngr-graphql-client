import React from "react";
import MessageDate from "./MessageDate";
import { CustomBtn } from "../CustomBtn";
import ReplyIcon from "../ReplyIcon";
import ProfilePicture from "../ProfilePicture";
import TrashIcon from "../TrashIcon";
import MessageTime from "./MessageTime";

const Message = (props) => {
  const {
    message,
    isMyMessage,
    sendingTo,
    messageDeleteHandler,
    messageReplyHandler,
  } = props;
  return (
    <div className="w-full">
      {/* Time of messages */}
      {message.createdAt ? <MessageDate date={message.createdAt} /> : null}

      <div
        className={`chat__single__message flex w-full ${
          isMyMessage ? "justify-end" : "justify-start"
        } my-4`}
      >
        <div className="inline-flex flex-col">
          <div className="message flex space-x-2 items-center relative">
            {!isMyMessage ? (
              <ProfilePicture size={"sm"} url={sendingTo.profilePicture} />
            ) : null}
            {!isMyMessage ? (
              <div
                className={`msg-content ${
                  isMyMessage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }  py-2 px-4 rounded-full`}
              >
                {message.text}
              </div>
            ) : null}
            <div className="__msg__options flex">
              <CustomBtn
                onClick={messageReplyHandler}
                customclassnames="hover:bg-gray-100 text-gray-600"
                size="sm"
              >
                <ReplyIcon />
              </CustomBtn>
              {isMyMessage ? (
                <CustomBtn
                  onClick={messageDeleteHandler}
                  customclassnames="hover:bg-gray-100 text-gray-600"
                  size="sm"
                >
                  <TrashIcon />
                </CustomBtn>
              ) : null}
            </div>
            {isMyMessage ? (
              <div
                className={`msg-content bg-blue-500 text-white py-2 px-4 rounded-full`}
              >
                {message.text}
              </div>
            ) : null}
          </div>
          <MessageTime
            time={message.createdAt}
            alignTextTo={isMyMessage ? "right" : "left"}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
