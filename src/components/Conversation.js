import React, { useState } from "react";
import { CustomBtn } from "./CustomBtn";
import OptionsBox from "./OptionsBox";
import ProfileDetails from "./ProfileDetails";
import ProfilePicture from "./ProfilePicture";
import { ThreeDots } from "./ThreeDots";

const Conversation = (props) => {
  const conversationOptions = [
    {
      _id: 1,
      title: "Mark as read",
      clickHandler: () => {
        console.log("Mark as read-------------");
      },
    },
    {
      _id: 2,
      title: "Delete Chat",
      clickHandler: () => {
        console.log("Delete Chat-------------");
      },
    },
  ];
  let profilePictureUrl = `https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/221871068_2896966410569438_6700860501280177332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRekg0E16LUAX9q4T-f&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT-Nlh57VINX9Qk5LBlhe_8ybz5UteVmzhhqV56VeKGqGA&oe=623A2391`;
  const [showConvoOptions, setShowConvoOptions] = useState(false);
  return (
    <div className="z-5 hover:bg-gray-100 flex justify-between py-3 px-4 rounded-md relative cursor-pointer">
      <ProfileDetails username={`KS 😊`} profile_picture={profilePictureUrl}>
        <div className="text-gray-500">😂😂😂</div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="text-gray-500">1 d</div>
      </ProfileDetails>
      <div className="single__card__ops flex space-x-2 items-center">
        <CustomBtn customclassnames="bg-white shadow-md border" size="sm">
          <ThreeDots />
        </CustomBtn>
        <ProfilePicture size="xsm" url={profilePictureUrl} />
      </div>
      {showConvoOptions ? (
        <OptionsBox
          customclassnames="top-16 right-10 w-36"
          items={conversationOptions}
        />
      ) : null}
    </div>
  );
};

export default Conversation;
