import React from "react";
import { MessageReceiver } from "./MessageReceiver";
import MessageSender from "./MessageSender";
import MessageTime from "./MessageTime";

const Message = (props) => {
  return (
    <div className="w-full">
      {/* Time of messages */}
      <MessageTime />
      {props.myMessage ? (
        <MessageSender
          messageId={props.msgId}
          optionState={props.msgOptToggleState}
          optionStateHandler={() => props.msgOptToggleStateHandler(props.msgId)}
        />
      ) : (
        <MessageReceiver
          messageId={props.msgId}
          optionState={props.msgOptToggleState}
          optionStateHandler={() => props.msgOptToggleStateHandler(props.msgId)}
        />
      )}
    </div>
  );
};

export default Message;
