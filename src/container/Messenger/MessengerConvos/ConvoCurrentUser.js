import React from "react";
import ProfilePicture from "../../../components/ProfilePicture";
import { CustomBtn } from "../../../components/CustomBtn";
import { ThreeDots } from "../../../components/ThreeDots";
import EditIcon from "../../../components/EditIcon";

const ConvoCurrentUser = (props) => {
  return (
    <div className="flex justify-between items-center space-x-2  w-full">
      <div className="mc__title__nd__dp flex items-center space-x-2">
        <ProfilePicture
          size="md"
          customclassnames="border-2"
          url={`https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/270376103_4628975630554173_6521574108613384626_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9BPLwQ2XcC4AX_sxm8O&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT_jufvCOEMBYZGm185bN-ap8buqFjVgMv1Me8_gCz6k8A&oe=623A2A75`}
        />
        <div className="text-2xl font-semibold">Chats</div>
      </div>
      {/* options */}
      <div className="flex items-center justify-around space-x-2">
        <CustomBtn
          customclassnames="bg-gray-100"
          size="sm"
          onClick={props.userOptionHandler}
        >
          <ThreeDots />
        </CustomBtn>
        <CustomBtn
          customclassnames="bg-gray-100"
          size="sm"
          onClick={props.newMessageHandler}
        >
          <EditIcon />
        </CustomBtn>
      </div>
    </div>
  );
};

export default ConvoCurrentUser;
