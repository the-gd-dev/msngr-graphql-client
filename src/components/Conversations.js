import React from "react";
import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="flex w-full flex-col py-6">
      {/* Single Person Card */}
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
