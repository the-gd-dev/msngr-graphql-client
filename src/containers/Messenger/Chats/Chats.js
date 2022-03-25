import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CustomBtn } from "../../../components/CustomBtn";
import { CustomInput } from "../../../components/CustomInput";
import ImageIcon from "../../../components/ImageIcon";
import Message from "../../../components/Message/Message";
import ChatHeader from "./ChatHeader";
import axios from "../../../axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const Chats = (props) => {
  const { newConversationUser } = props;
  const [newMessage, setNewMessage] = useState("");
  const [chatHeaderUser, setChatHeaderUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const messagesEndHere = useRef(null);
  const [messagesContainerMaxH, setMessagesContainerMaxH] = useState(0);
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
            replyingMsg : ${replyToMessage ? '"'+replyToMessage._id+'"' : ""}
          }){
            _id
            text
            image
            reaction
            replyToMessage {
              _id
              text
              image
            }
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
    if (newConversationUser != null && currentUser) {
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
          scrollToBottom();
        })();
      } else {
        setChatHeaderUser(newConversationUser);
      }
    }
  }, [newConversationUser, currentUser]);
  useEffect(() => {
    let maxHeight = window.outerHeight - 235;
    if (replyToMessage) {
      maxHeight = window.outerHeight - 300;
    }
    setMessagesContainerMaxH(maxHeight);
  }, [replyToMessage]);

  const deleteHandler = async (messageId) => {
    const deleteSwal = withReactContent(Swal);
    const { isConfirmed } = await deleteSwal.fire({
      title: <strong>Delete Message</strong>,
      html: <i>All the replies related to this message will be deleted.</i>,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Discard",
      confirmButtonColor: "#d73838",
    });
    if (isConfirmed) {
      const graphqlQuery = `
        mutation {
          deleteMessage(messageId:"${messageId}"){
            _id
            text
            image
            reaction
            createdAt
          }
        }
      `;
      let { data } = await axios.post("/graphql", { query: graphqlQuery });
      let deletedMessageId = data.data.deleteMessage._id;
      let updatedMessages = messages.filter((m) => m._id !== deletedMessageId);
      setMessages(updatedMessages);
    }
  };
  const replyHandler = (messageId) => {
    let msg = messages.find((m) => m._id === messageId);
    setReplyToMessage(msg);
  };
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
          {messages.length > 0 &&
            messages.map((msg) => (
              <Message
                messageReplyHandler={() => replyHandler(msg._id)}
                messageDeleteHandler={() => deleteHandler(msg._id)}
                sendingTo={chatHeaderUser}
                isMyMessage={
                  currentUser && msg.senderId._id === currentUser._id
                }
                key={msg._id}
                message={msg}
              />
            ))}
          <div ref={messagesEndHere}></div>
        </div>
        {messages.length === 0 ? (
          <div className="m-auto">
            No messages. Please select a conversation or create a new
            conversation.
          </div>
        ) : null}
      </div>
      {/* Reply Section */}

      {/* CHat Footer */}
      <div className="chat__messages__footer relative">
        {replyToMessage ? (
          <div className="chat__messages__reply__footer justify-between flex h-full w-full py-3 px-4 z-15 border-t border-gray-300 bg-white space-x-3">
            <div className="flex flex-col my-auto">
              <div className="text-sm text-gray-800">
                Replying to
                <span className="font-semibold">{chatHeaderUser.name}</span>
              </div>
              <div className="message__to_reply text-sm text-gray-600">
                {replyToMessage.text}
              </div>
            </div>
            <button
              className="hover:bg-gray-200 bg-gray-100npm w-10 h-10 flex rounded-full"
              onClick={() => setReplyToMessage(null)}
            >
              <span className="text-4xl m-auto -mt-1 ">&times;</span>
            </button>
          </div>
        ) : null}
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
