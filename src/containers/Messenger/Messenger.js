import React, { useEffect, useState } from "react";
import ProfilePicture from "../../components/ProfilePicture";
import AuthLayout from "../../layouts/AuthLayout";
import Chats from "./Chats/Chats";
import MessengerConvos from "./MessengerConvos/MessengerConvos";
import "./Messenger.css";
import { useSelector } from "react-redux";
const Messenger = () => {
  const [toggleInformation, setToggleInformation] = useState(false);
  const [newConvoUser, setNewConvoUser] = useState(null);
  const [newMessageSent, setNewMessageSent] = useState(false);
  const [conversatingWith, setConversatingWith] = useState({});
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (newConvoUser && newConvoUser.participents) {
      let cw = newConvoUser.participents.find((p) => p._id !== currentUser._id);
      setConversatingWith(cw);
    } else {
      setConversatingWith(newConvoUser);
    }
  }, [newConvoUser]);
  const newConversationHandler = (data) => {
    setNewConvoUser(data);
  };
  return (
    <AuthLayout>
      <div className="flex w-full h-full">
        <div className="w-1/4 h-full border-r hidden lg:inline">
          <MessengerConvos
            loadConversation={newMessageSent}
            newConversation={(data) => newConversationHandler(data)}
          />
        </div>
        <div className="w-full lg:w-3/4 h-full border-r">
          <div className="messages__o__container">
            <Chats
              isMessageSent={() => setNewMessageSent(!newMessageSent)}
              newConversationUser={newConvoUser}
              toggleUserInfoState={toggleInformation}
              toggleUserInfo={() => setToggleInformation(!toggleInformation)}
            />
          </div>
        </div>
        {toggleInformation ? (
          <div className="w-1/4 h-full flex flex-col py-10">
            <div className="m-auto w-full flex flex-col justify-center items-center">
              <div className="convo__user__dp">
                <ProfilePicture
                  size={"xxl"}
                  customclassnames={"border-2"}
                  url={conversatingWith.profilePicture}
                />
              </div>
              <div className="text-2xl font-semibold convo__user__name mt-2 ">
                {conversatingWith.name}
              </div>
              <div className="flex flex-col w-full mt-4 pt-4 border-t">
                <div className="m-auto w-3/4">
                  <div className="font-semibold text-lg cursor-pointer hover:bg-blue-500 hover:text-white py-1 rounded-full px-5">
                    View Profile
                  </div>
                  <div className="font-semibold text-lg cursor-pointer hover:bg-blue-500 hover:text-white py-1 rounded-full px-5">
                    Block User
                  </div>
                  <div className="font-semibold text-lg cursor-pointer hover:bg-blue-500 hover:text-white py-1 rounded-full px-5">
                    Mute Notifications
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </AuthLayout>
  );
};

export default Messenger;
