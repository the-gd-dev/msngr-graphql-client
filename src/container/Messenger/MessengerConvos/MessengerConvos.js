import React, { useState } from "react";
import Conversations from "../../../components/Conversations";

import ConversationHeader from "./ConversationHeader";
const MessengerConvos = (props) => {
  const [showConvoHeaderOptions, setConvoHeaderOptions] = useState(false);
  const conversationHeaderItems = [
    {
      _id: 1,
      title: "Log Out",
      clickHandler: () => {
        console.log("logout clicked-------------");
      },
    },
  ];
  return (
    <div className="conversations___container p-5">
      <ConversationHeader showuseroptions={showConvoHeaderOptions} useroptions={conversationHeaderItems} />
      <div
        className="conversations___wrapper w-full"
        style={{
          height: 768,
          overflowY: "auto",
        }}
      >
        <Conversations />
      </div>
      <div className="conversations___footer"></div>
    </div>
  );
};

export default MessengerConvos;
