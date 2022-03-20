import React, { useState } from "react";
import ProfilePicture from "../../components/ProfilePicture";
import AuthLayout from "../../layouts/AuthLayout";
import Chats from "./Chats/Chats";
import MessengerConvos from "./MessengerConvos/MessengerConvos";
import './Messenger.css'
const Messenger = () => {
  const [toggleInformation, setToggleInformation] = useState(false);
  const [messageOptionState, setMessageOptionState] = useState(0);
  const msgOptionToggleHandler = (msgId) => {
    console.log(msgId);
    if (messageOptionState === msgId) {
      setMessageOptionState(0);
    } else {
      setMessageOptionState(msgId);
    }
  };
  return (
    <AuthLayout>
      <div className="flex w-full h-full">
        <div className="w-1/4 h-full border-r hidden lg:inline">
          <MessengerConvos />
        </div>
        <div className="w-full lg:w-3/4 h-full border-r">
          <div className="messages__o__container">
            <Chats
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
                  url={`https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/270376103_4628975630554173_6521574108613384626_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9BPLwQ2XcC4AX_sxm8O&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT_jufvCOEMBYZGm185bN-ap8buqFjVgMv1Me8_gCz6k8A&oe=623A2A75`}
                />
              </div>
              <div className="text-2xl font-semibold convo__user__name mt-2 ">
                Kanika Sharma
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
