import React, { useState } from "react";
import OptionsBox from "../../../components/OptionsBox";
import ProfilePicture from "../../../components/ProfilePicture";
import SearchInput from "../../../components/SearchInput";
import ConvoCurrentUser from "./ConvoCurrentUser";
const ConversationHeader = (props) => {
  const { showuseroptions, useroptions } = props;
  const [searchInputFocused, setSearchInputFocused] = useState(false);
  return (
    <div className="conversations___header relative">
      <div className="conversations___header__user">
        <ConvoCurrentUser
          userOptionHandler={props.handleUserOptions}
          newMessageHandler={props.handleNewMessage}
        />
      </div>
      <div className="conversations___header__search__mc relative">
        <SearchInput
          isInputFocused={searchInputFocused}
          isInputFocusHandler={() => setSearchInputFocused(true)}
          isInputBlurHandler={() => setSearchInputFocused(false)}
        />
      </div>
      {showuseroptions ? (
        <OptionsBox
          customclassnames="top-10 right-12 w-36"
          items={useroptions}
        />
      ) : null}
      {searchInputFocused ? (
        <div className="z-20 absolute bg-white w-full mc__search__results py-4">
          <div className="flex space-x-3 items-center hover:bg-gray-100 rounded-md py-2 px-4 cursor-pointer">
            <ProfilePicture
              style={{
                height: 45,
                width: 45,
              }}
              customclassnames="border-2"
              url={`https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/270376103_4628975630554173_6521574108613384626_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9BPLwQ2XcC4AX_sxm8O&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT_jufvCOEMBYZGm185bN-ap8buqFjVgMv1Me8_gCz6k8A&oe=623A2A75`}
            />
            <div className="text-lg font-semibold">User Name</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ConversationHeader;
