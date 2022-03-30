import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Conversations from "../../../components/Conversations";
import { deleteToken } from "../../../store/auth/actions";
import axios from "../../../axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ConversationHeader from "./ConversationHeader";
const MessengerConvos = (props) => {
  const [showConvoHeaderOptions, setShowConvoHeaderOptions] = useState(false);
  const [showConvoOptions, setShowConvoOptions] = useState(0);
  const [newConversationData, setNewConversationData] = useState(null);
  const [selectConversation, setSelectConversation] = useState(null);
  const [conversations, setConversations] = useState([]);
  const { loadConversation } = props;
  const getConversations = async () => {
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
  };
  const deleteConversation = async (convoId) => {
    const deleteSwal = withReactContent(Swal);
    const { isConfirmed } = await deleteSwal.fire({
      title: <strong>Delete Conversation!!</strong>,
      html: <i>All the messages related to conversation will be deleted.</i>,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Discard",
      confirmButtonColor: "#d73838",
    });
    if (isConfirmed) {
      const graphqlQuery = `
        mutation {
          deleteConversations (conversationId : "${convoId}"){
            _id
          }
        }
      `;
      let { data } = await axios.post("/graphql", { query: graphqlQuery });
      let vanishedId = data?.data?.deleteConversations?._id;
      if (vanishedId) {
        let updatedConversations = conversations.filter(
          (c) => c._id !== vanishedId
        );
        setConversations(updatedConversations);
      }
    } else {
      setShowConvoOptions(0);
    }
  };
  const markConversationRead = (convoId) => {
    console.log(convoId);
  };
  useEffect(() => {
    setNewConversationData(null);
    (async function () {
      await getConversations();
    })();
  }, [loadConversation]);

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
      clickHandler: async () => {
        const deleteSwal = withReactContent(Swal);
        const { isConfirmed } = await deleteSwal.fire({
          title: <strong>Leaving so soon!</strong>,
          html: <i>You're friends and us are going to miss you. 😢😢😢</i>,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Log Out",
          cancelButtonText: "I wannna Stay",
          confirmButtonColor: "#000000",
        });
        if (isConfirmed) {
          dispatch(deleteToken());
          navigate("/login");
        } else {
          setShowConvoHeaderOptions(false);
        }
      },
    },
  ];
  const newConvoHandler = (convoUser) => {
    if (convoUser !== null) {
      let isAlreadyInConvo = conversations.find(
        (c) =>
          c.participents[0]._id === convoUser._id ||
          c.participents[1]._id === convoUser._id
      );
      if (isAlreadyInConvo) {
        props.newConversation(isAlreadyInConvo);
        setSelectConversation(isAlreadyInConvo);
        return false;
      }
      if (!convoUser.participents) {
        props.newConversation(convoUser);
        setNewConversationData(convoUser);
        return false;
      }
      setSelectConversation(convoUser);
    }
    props.newConversation(convoUser);
  };
  const buddyContainerMaxH = window.outerHeight - 250;
  return (
    <div className="conversations___container p-5">
      <ConversationHeader
        newConvoSelected={(v) => newConvoHandler(v)}
        handleUserOptions={convoHeaderOptionHandler}
        showuseroptions={showConvoHeaderOptions}
        useroptions={conversationHeaderItems}
      />

      <div
        className="conversations___wrapper w-full relative z-15"
        style={{
          height: buddyContainerMaxH,
          overflowY: "auto",
        }}
      >
        <Conversations
          readConvo={(id) => markConversationRead(id)}
          deleteConvo={(id) => deleteConversation(id)}
          selected={selectConversation}
          conversations={conversations}
          newConvoSelected={(v) => newConvoHandler(v)}
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
