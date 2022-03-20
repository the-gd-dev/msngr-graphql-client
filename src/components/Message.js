import React from "react";
import { MessageReceiver } from "./MessageReceiver";
import MessageSender from "./MessageSender";
import MessageTime from "./MessageTime";

const Message = () => {
  return (
    <div className="w-full">
      {/* Time of messages */}
      <MessageTime />
      {/* Receiver Msg */}
      <MessageReceiver />
      {/* Sender Msg */}
      <MessageSender />
    </div>
  );
};

export default Message;
