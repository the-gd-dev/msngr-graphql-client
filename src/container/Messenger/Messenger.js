import React, { useState } from "react";

import AuthLayout from "../../layouts/AuthLayout";
import Chats from "./Chats/Chats";
import MessengerConvos from "./MessengerConvos/MessengerConvos";
const Messenger = () => {
  return (
    <AuthLayout>
      <div className="flex w-full h-full">
        <div className="w-1/4 h-full border-r">
          <MessengerConvos />
        </div>
        <div className="w-3/4 h-full border-r">
          <div className="messages__o__container">
            <Chats />
          </div>
        </div>
        {/* <div className="w-1/4 h-full border-r">Right Side</div> */}
      </div>
    </AuthLayout>
  );
};

export default Messenger;
