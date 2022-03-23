import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import NewConversation from "./NewConversation";
import axios from "../axios";
const Conversations = (props) => {
  const [selected, setSelected] = useState(null);

  let { conversations, convoOptionsHandler, convoOptionsState, newConvo } =
    props;
  useEffect(() => {
    if (conversations.length > 0) {
      setSelected(conversations[0]);
      props.newConvoSelected(conversations[0]);
    }
  }, [conversations]);
  return (
    <div className="flex w-full h-full flex-col py-6">
      {/* Single Person Card */}
      {newConvo ? (
        <NewConversation
          convoId={newConvo._id}
          conversation={newConvo}
          optionsToggleState={convoOptionsState}
          optionsToggleHandler={(id) => convoOptionsHandler(id)}
        />
      ) : null}
      {conversations.map((convo) => (
        <Conversation
          selectedConversation={selected}
          onSelectConvo={() => (
            props.newConvoSelected(convo), setSelected(convo)
          )}
          key={convo._id}
          convoId={convo._id}
          convoData={convo}
          optionsToggleState={convoOptionsState}
          optionsToggleHandler={(id) => convoOptionsHandler(id)}
        />
      ))}
    </div>
  );
};

export default Conversations;
