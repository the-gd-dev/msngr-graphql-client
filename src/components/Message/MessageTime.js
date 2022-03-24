import React from "react";
import moment from "moment";
const MessageTime = (props) => {
  return (
    <div
      style={{
        textAlign: props.alignTextTo || "left",
      }}
      className="text-sm font-semibold text-gray-500 text-center py-2"
    >
      {moment(props.time).format("hh:mm A")}
    </div>
  );
};

export default MessageTime;
