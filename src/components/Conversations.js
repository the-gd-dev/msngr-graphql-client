import React from "react";
import Conversation from "./Conversation";

const Conversations = ({ convoOptionsHandler, convoOptionsState }) => {
  return (
    <div className="flex w-full h-full flex-col py-6">
      {/* Single Person Card */}
      <Conversation
        convoId={1}
        optionsToggleState={convoOptionsState}
        optionsToggleHandler={(id) => convoOptionsHandler(id)}
      />
      <Conversation
        convoId={2}
        optionsToggleState={convoOptionsState}
        optionsToggleHandler={(id) => convoOptionsHandler(id)}
      />
      <Conversation
        convoId={3}
        optionsToggleState={convoOptionsState}
        optionsToggleHandler={(id) => convoOptionsHandler(id)}
      />
    </div>
  );
};

export default Conversations;
