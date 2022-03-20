import React from "react";
import Message from "../../../components/Message";
import ChatHeader from "./ChatHeader";

const Chats = () => {
  return (
    <div className="messages__i__container">
      {/* CHat Header */}
      <ChatHeader />
      {/* CHat Messages */}
      <div
        className="chat__messages__container px-4 flex flex-col items-baseline"
        style={{
          height: 800,
          overflowY: "auto",
        }}
      >
        <div className="messages__wrapper mt-auto w-full">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
      {/* CHat Footer */}
      <div className="chat__messages__footer flex space-x-2 h-full w-full items-center px-4">
        <div className="flex">
          <button className="w-9 h-9 rounded-full text-cyan-500 hover:bg-gray-100 flex justify-between items-center">
            <svg
              viewBox="0 0 36 36"
              height="28px"
              width="28px"
              className="m-auto"
            >
              <path
                d="M13.5 16.5a2 2 0 100-4 2 2 0 000 4z"
                fill="#0084ff"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 12v12a4 4 0 004 4h14a4 4 0 004-4V12a4 4 0 00-4-4H11a4 4 0 00-4 4zm18-1.5H11A1.5 1.5 0 009.5 12v9.546a.25.25 0 00.375.217L15 18.803a6 6 0 016 0l5.125 2.96a.25.25 0 00.375-.217V12a1.5 1.5 0 00-1.5-1.5z"
                fill="#0084ff"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex w-full">
          <label className="w-full  flex w-full relative">
            <input
              placeholder="Aa"
              type="text"
              className="bg-gray-100 text-black rounded-full h-10 pl-4 w-full outline-0"
            />
          </label>
        </div>
        <div className="flex">
          <button className="bg-gray-100 text-gray-400 font-semibold hover:bg-blue-500 hover:text-white  px-4 py-1 rounded-full m-auto">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
