import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Conversation from "./Conversation";
import NewConversation from "./NewConversation";
const Conversations = (props) => {
  let {
    conversations,
    convoOptionsHandler,
    convoOptionsState,
    newConvo,
    selected,
  } = props;
  useEffect(() => {
    props.newConvoSelected(null);
    if (conversations.length > 0) {
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
      {conversations.length > 0
        ? conversations.map((convo) => (
            <Conversation
              markAsReadHandler={() => props.readConvo(convo._id)}
              deleteHandler={() => props.deleteConvo(convo._id)}
              selectedConversation={selected}
              onSelectConvo={() => props.newConvoSelected(convo)}
              key={convo._id}
              convoId={convo._id}
              convoData={convo}
              optionsToggleState={convoOptionsState}
              optionsToggleHandler={(id) => convoOptionsHandler(id)}
            />
          ))
        : null}
    </div>
  );
};

export default Conversations;
