import React, { useState } from "react";
import Conversations from "../../../components/Conversations";

import ConversationHeader from "./ConversationHeader";
const MessengerConvos = (props) => {
  const [showConvoHeaderOptions, setShowConvoHeaderOptions] = useState(false);
  const [showConvoOptions, setShowConvoOptions] = useState(0);
  const setShowConvoOptionsHandler = (convoId) => {
    setShowConvoHeaderOptions(false);
    if (showConvoOptions === convoId) {
      setShowConvoOptions(0);
    } else {
      setShowConvoOptions(convoId);
    }
  };
  const convoHeaderOptionHandler = () => {
    setShowConvoOptions(0);
    setShowConvoHeaderOptions(!showConvoHeaderOptions);
  };
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
      <ConversationHeader
        newMessageHandler={() => console.log("=====")}
        handleUserOptions={convoHeaderOptionHandler}
        showuseroptions={showConvoHeaderOptions}
        useroptions={conversationHeaderItems}
      />
      <div
        className="conversations___wrapper w-full"
        style={{
          height: 768,
          overflowY: "auto",
        }}
      >
        <Conversations
          convoOptionsState={showConvoOptions}
          convoOptionsHandler={(id) => setShowConvoOptionsHandler(id)}
        />
      </div>
      <div className="conversations___footer"></div>
    </div>
  );
};

export default MessengerConvos;
