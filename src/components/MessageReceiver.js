import React from "react";
import { CustomBtn } from "./CustomBtn";
import OptionsBox from "./OptionsBox";
import ProfilePicture from "./ProfilePicture";
import ReplyIcon from "./ReplyIcon";
import ThreeDotsV from "./ThreeDotsV";

export const MessageReceiver = (props) => {
  let profilePictureUrl = `https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/221871068_2896966410569438_6700860501280177332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRekg0E16LUAX9q4T-f&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT-Nlh57VINX9Qk5LBlhe_8ybz5UteVmzhhqV56VeKGqGA&oe=623A2391`;
  const msgControlOptions = [
    {
      _id: 1,
      title: "Edit",
      clickHandler: () => {
        console.log("Edit message");
      },
    },
    {
      _id: 2,
      title: "Delete",
      clickHandler: () => {
        console.log("Delte message");
      },
    },
  ];
  return (
    <div className="chat__single__message flex w-full justify-start my-4">
      <div className="message flex space-x-2 items-center relative">
        <ProfilePicture size={"sm"} url={profilePictureUrl} />
        <div className="msg-content bg-gray-100 py-2 px-4 rounded-full">
          Tuitions hoti h yr... Abhi 26 tk to
        </div>
        <div className="__msg__options flex space-x-1">
          <CustomBtn
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ReplyIcon />
          </CustomBtn>
          <CustomBtn
            onClick={() => props.optionStateHandler()}
            customclassnames="hover:bg-gray-100 text-gray-600"
            size="sm"
          >
            <ThreeDotsV />
          </CustomBtn>
        </div>
        {props.optionState === props.messageId ? (
          <OptionsBox
            customclassnames="top-12 right-2 w-24 "
            items={msgControlOptions}
          />
        ) : null}
      </div>
    </div>
  );
};
