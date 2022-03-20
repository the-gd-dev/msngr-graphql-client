import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Conversations from "../../../components/Conversations";
import { deleteToken } from "../../../store/auth/actions";

import ConversationHeader from "./ConversationHeader";
const MessengerConvos = (props) => {
  const [showConvoHeaderOptions, setShowConvoHeaderOptions] = useState(false);
  const [showConvoOptions, setShowConvoOptions] = useState(0);
  const [newConversationData, setNewConversationData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      title: "Online People",
      clickHandler: () => {},
    },
    {
      _id: 2,
      title: "Log Out",
      clickHandler: () => {
        if (window.confirm("Are you sure ?")) {
          dispatch(deleteToken());
          navigate("/login");
        }
      },
    },
  ];
  const newConvoHandler = (convoUser) => {
    setNewConversationData(convoUser);
    props.newConversation(convoUser);
  };

  return (
    <div className="conversations___container p-5">
      <ConversationHeader
        newConvoSelected={(v) => newConvoHandler(v)}
        newMessageHandler={() => console.log("=====")}
        handleUserOptions={convoHeaderOptionHandler}
        showuseroptions={showConvoHeaderOptions}
        useroptions={conversationHeaderItems}
      />

      <div
        className="conversations___wrapper w-full relative z-15"
        style={{
          height: 790,
          overflowY: "auto",
        }}
      >
        <Conversations
          newConvo={newConversationData}
          convoOptionsState={showConvoOptions}
          convoOptionsHandler={(id) => setShowConvoOptionsHandler(id)}
        />
      </div>
      <div className="conversations___footer"></div>
    </div>
  );
};

export default MessengerConvos;
