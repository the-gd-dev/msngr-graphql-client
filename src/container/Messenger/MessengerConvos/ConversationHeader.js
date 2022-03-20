import React from "react";
import OptionsBox from "../../../components/OptionsBox";
import SearchInput from "../../../components/SearchInput";
import ConvoCurrentUser from "./ConvoCurrentUser";
const ConversationHeader = (props) => {
  const { showuseroptions, useroptions } = props;
  return (
    <div className="conversations___header relative">
      <div className="conversations___header__user">
        <ConvoCurrentUser
          userOptionHandler={props.handleUserOptions}
          newMessageHandler={props.handleNewMessage}
        />
      </div>
      <div className="conversations___header__search__mc">
        <SearchInput />
      </div>
      {showuseroptions ? (
        <OptionsBox
          customclassnames="top-10 right-12 w-36"
          items={useroptions}
        />
      ) : null}
    </div>
  );
};

export default ConversationHeader;
