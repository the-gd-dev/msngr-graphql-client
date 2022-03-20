import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import NewConversation from "./NewConversation";
import axios from "../axios";
const Conversations = (props) => {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    (async function () {
      let graphqlQuery = `{
          getConversations {
            _id
            participents {
              _id
              name
              profilePicture
            }
            lastMessage  {
              text
              image
              updatedAt
            }
          }
        }
      `;
      let { data } = await axios.post("/graphql", { query: graphqlQuery });
      setConversations(data.data.getConversations);
    })();
  }, []);

  let { convoOptionsHandler, convoOptionsState, newConvo } = props;
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
