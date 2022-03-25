import React from "react";
import moment from "moment";
const MessageTime = (props) => {
  return (
    <small
      style={{
        textAlign: props.alignTextTo || "left",
        fontSize : 12
      }}
      className="font-semibold text-gray-400 text-center px-2 py-1"
    >
      {moment(props.time).format("hh:mm A")}
    </small>
  );
};

export default MessageTime;
