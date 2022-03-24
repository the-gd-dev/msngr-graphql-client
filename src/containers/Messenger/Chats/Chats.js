import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CustomBtn } from "../../../components/CustomBtn";
import { CustomInput } from "../../../components/CustomInput";
import ImageIcon from "../../../components/ImageIcon";
import Message from "../../../components/Message/Message";
import ChatHeader from "./ChatHeader";
import axios from "../../../axios";
const Chats = (props) => {
  const { newConversationUser } = props;
  const [newMessage, setNewMessage] = useState("");
  const [chatHeaderUser, setChatHeaderUser] = useState({});
  const [messages, setMessages] = useState([]);
  const messagesEndHere = useRef(null);
  const currentUser = useSelector((state) => state.auth.user);
  const sendNewMessage = async () => {
    if (newMessage) {
      const graphqlQuery = `
        mutation {
          createMessage(messageInput : {
            text : "${newMessage}"
            image  : ""
            sender : "${currentUser._id}"
            reciever : "${chatHeaderUser._id}"
          }){
            _id
            text
            image
            reaction
            createdAt
          }
        }
      `;
      let { data } = await axios.post("/graphql", { query: graphqlQuery });
      setNewMessage("");
      props.isMessageSent();
    }
  };
  const scrollToBottom = () => {
    messagesEndHere.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (newConversationUser != null) {
      if (newConversationUser.participents) {
        let conversatingWith = newConversationUser.participents.find(
          (p) => p._id !== currentUser._id
        );

        setChatHeaderUser(conversatingWith);
        (async function () {
          const graphqlQuery = `
          {
             getMessages(conversationId : "${newConversationUser._id}"){
               _id
               senderId {
                 _id
               }
               text
               image
               reaction
               createdAt
             }
           }
         `;
          let { data } = await axios.post("/graphql", { query: graphqlQuery });
          // setMessages(data.data.getMessages);
          let messages = data.data.getMessages;
          //algo to group by date
          let oldMessageCreateDate = "";
          for (const msg of messages) {
            let dateOnly = msg.createdAt.split("T")[0];
            if (oldMessageCreateDate == dateOnly) {
              delete msg.createdAt;
            }
            oldMessageCreateDate = dateOnly;
          }
          setMessages(messages);
          console.log(messages);
          scrollToBottom();
        })();
      } else {
        setChatHeaderUser(newConversationUser);
      }
    }
  }, [newConversationUser, currentUser]);
  const messagesContainerMaxH = window.outerHeight - 225;
  return (
    <div className="messages__i__container">
      {/* CHat Header */}
      <ChatHeader
        userData={chatHeaderUser}
        uisbState={props.toggleUserInfoState}
        uisbToggler={props.toggleUserInfo}
      />
      {/* CHat Messages */}
      <div
        className="chat__messages__container px-4 flex flex-col items-baseline"
        style={{
          height: messagesContainerMaxH,
          overflowY: "auto",
        }}
      >
        <div className="messages__wrapper mt-auto w-full">
          {messages.map((msg) => (
            <Message
              sendingTo={chatHeaderUser}
              isMyMessage={msg.senderId._id === currentUser._id}
              key={msg._id}
              message={msg}
            />
          ))}
          <div ref={messagesEndHere}></div>
        </div>
      </div>
      {/* Reply Section */}

      {/* CHat Footer */}
      <div className="chat__messages__footer relative">
        {/* <div className="absolute chat__messages__reply__footer flex flex-col h-full w-full py-2 px-4 -top-20 z-15 border-t border-gray-300">
          <div className="text-sm text-gray-800">
            Replying to <span className="font-semibold">Kanika</span>
          </div>
          <div className="message__to_reply text-sm text-gray-600">
            Tuitions hoti h yr... Abhi 26 tk to
          </div>
        </div> */}
        <div className="flex space-x-2 h-full w-full items-center px-4">
          <div className="flex">
            <CustomBtn>
              <ImageIcon />
            </CustomBtn>
          </div>
          <div className="flex w-full">
            <label className="w-full  flex w-full relative">
              <CustomInput
                placeholder="Aa"
                customclassnames={`h-9 pl-4`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </label>
          </div>
          <div className="flex">
            <CustomBtn
              onClick={sendNewMessage}
              disabled={!newMessage}
              customclassnames="disabled:bg-gray-100 disabled:text-gray-400 font-semibold bg-blue-500 text-white  px-4 py-1"
            >
              Send
            </CustomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
