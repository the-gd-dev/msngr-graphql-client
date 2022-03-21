import React from "react";
import { MessageReceiver } from "./MessageReceiver";
import MessageSender from "./MessageSender";
import MessageTime from "./MessageTime";

const Message = (props) => {
  let { msgData, msgOptToggleState, msgOptToggleStateHandler } = props;
  return (
    <div className="w-full">
      {/* Time of messages */}
      <MessageTime />
      {props.myMessage ? (
        <MessageSender
          messageId={msgData._id}
          optionState={msgOptToggleState}
          optionStateHandler={() => msgOptToggleStateHandler(msgData._id)}
        />
      ) : (
        <MessageReceiver
          messageId={props.id}
          optionState={msgOptToggleState}
          optionStateHandler={() => msgOptToggleStateHandler(msgData._id)}
        />
      )}
    </div>
  );
};

export default Message;
