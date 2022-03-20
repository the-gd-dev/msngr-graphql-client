import React from "react";
import { CustomBtn } from "../../../components/CustomBtn";
import { CustomInput } from "../../../components/CustomInput";
import ImageIcon from "../../../components/ImageIcon";
import Message from "../../../components/Message";
import ChatHeader from "./ChatHeader";

const Chats = (props) => {
  return (
    <div className="messages__i__container">
      {/* CHat Header */}
      <ChatHeader
        uisbState={props.toggleUserInfoState}
        uisbToggler={props.toggleUserInfo}
      />
      {/* CHat Messages */}
      <div
        className="chat__messages__container px-4 flex flex-col items-baseline"
        style={{
          height: 725,
          overflowY: "auto",
        }}
      >
        <div className="messages__wrapper mt-auto w-full">
          <Message
            myMessage={false}
            msgId={1}
            msgOptToggleState={props.msgOptState}
            msgOptToggleStateHandler={(v) => {
              console.log(props.msgOptState);
              props.msgOptStateHandler(v);
            }}
          />
          <Message
            msgId={2}
            myMessage={true}
            msgOptToggleState={props.msgOptState}
            msgOptToggleStateHandler={(v) => {
              console.log(props.msgOptState);
              props.msgOptStateHandler(v);
            }}
          />
          <Message
            msgId={3}
            myMessage={false}
            msgOptToggleState={props.msgOptState}
            msgOptToggleStateHandler={(v) => {
              console.log(props.msgOptState);
              props.msgOptStateHandler(v);
            }}
          />
          <Message
            msgId={4}
            myMessage={true}
            msgOptToggleState={props.msgOptState}
            msgOptToggleStateHandler={(v) => {
              console.log(props.msgOptState);
              props.msgOptStateHandler(v);
            }}
          />
          <Message
            msgId={5}
            myMessage={false}
            msgOptToggleState={props.msgOptState}
            msgOptToggleStateHandler={(v) => {
              console.log(props.msgOptState);
              props.msgOptStateHandler(v);
            }}
          />
          <Message
            msgId={6}
            myMessage={false}
            msgOptToggleState={props.msgOptState}
            msgOptToggleStateHandler={(v) => {
              console.log(props.msgOptState);
              props.msgOptStateHandler(v);
            }}
          />
          <Message
            msgId={7}
            myMessage={true}
            msgOptToggleState={props.msgOptState}
            msgOptToggleStateHandler={(v) => {
              console.log(props.msgOptState);
              props.msgOptStateHandler(v);
            }}
          />
        </div>
      </div>
      {/* Reply Section */}

      {/* CHat Footer */}
      <div className="chat__messages__footer">
        <div className="chat__messages__reply__footer flex flex-col h-full w-full py-2 px-4 border-t border-gray-300">
          <div className="text-sm text-gray-800">
            Replying to <span className="font-semibold">Kanika</span>
          </div>
          <div className="message__to_reply text-sm text-gray-600">
            Tuitions hoti h yr... Abhi 26 tk to
          </div>
        </div>
        <div className="flex space-x-2 h-full w-full items-center px-4">
          <div className="flex">
            <CustomBtn>
              <ImageIcon />
            </CustomBtn>
          </div>
          <div className="flex w-full">
            <label className="w-full  flex w-full relative">
              <CustomInput placeholder="Aa" customclassnames={`h-9 pl-4`} />
            </label>
          </div>
          <div className="flex">
            <CustomBtn customclassnames="bg-gray-100 text-gray-400 font-semibold hover:bg-blue-500 hover:text-white  px-4 py-1">
              Send
            </CustomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
