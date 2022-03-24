import React from "react";
import moment from "moment";
const MessageTime = (props) => {
  return (
    <div className="text-sm font-semibold text-gray-500 text-center py-2">
      {moment(props.date).format("ll")}
    </div>
  );
};

export default MessageTime;
