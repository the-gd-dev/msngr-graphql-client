import React, { useState } from "react";
import ProfilePicture from "../../components/ProfilePicture";
import AuthLayout from "../../layouts/AuthLayout";
import Chats from "./Chats/Chats";
import MessengerConvos from "./MessengerConvos/MessengerConvos";
import "./Messenger.css";
const Messenger = () => {
  const [toggleInformation, setToggleInformation] = useState(false);
  const [messageOptionState, setMessageOptionState] = useState(0);
  const [newConvoUser, setNewConvoUser] = useState(null);

  const msgOptionToggleHandler = (msgId) => {
    console.log(msgId);
    if (messageOptionState === msgId) {
      setMessageOptionState(0);
    } else {
      setMessageOptionState(msgId);
    }
  };
  let profilePictureUrl = `https://picsum.photos/id/1011/200/300`;
  const newConversationHandler = (data) => {
    setNewConvoUser(data);
  };
  return (
    <AuthLayout>
      <div className="flex w-full h-full">
        <div className="w-1/4 h-full border-r hidden lg:inline">
          <MessengerConvos
            newConversation={(data) => newConversationHandler(data)}
          />
        </div>
        <div className="w-full lg:w-3/4 h-full border-r">
          <div className="messages__o__container">
            <Chats
              newConversationUser={newConvoUser}
              msgOptState={messageOptionState}
              msgOptStateHandler={(v) => msgOptionToggleHandler(v)}
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
                  url={profilePictureUrl}
                />
              </div>
              <div className="text-2xl font-semibold convo__user__name mt-2 ">
                Rebbecca Larson
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
