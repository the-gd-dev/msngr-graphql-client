import React from "react";
import { CustomBtn } from "../../../components/CustomBtn";
import ProfileDetails from "../../../components/ProfileDetails";
import { ThreeDots } from "../../../components/ThreeDots";

const ChatHeader = (props) => {
  const profilePictureUrl =
    "https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/221871068_2896966410569438_6700860501280177332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRekg0E16LUAX9q4T-f&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT-Nlh57VINX9Qk5LBlhe_8ybz5UteVmzhhqV56VeKGqGA&oe=623A2391";
  return (
    <div className="chat__header shadow-md  flex w-full justify-between items-center px-4">
      <div className="flex space-x-2 items-center py-3 rounded-md px-2">
        <ProfileDetails
          size="md"
          username={`KS 😊`}
          profile_picture={profilePictureUrl}
        >
          <div className="text-gray-500 leading-tight">Active 1d ago</div>
        </ProfileDetails>
      </div>
      <div className="chat__user__information">
        <CustomBtn
          onClick={props.uisbToggler}
          customclassnames={
            props.uisbState
              ? " bg-blue-600 text-white"
              : "hover:bg-gray-100 text-blue-600"
          }
          size="sm"
        >
          <ThreeDots />
        </CustomBtn>
      </div>
    </div>
  );
};

export default ChatHeader;
