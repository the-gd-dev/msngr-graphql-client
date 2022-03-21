import React, { useState } from "react";
import OptionsBox from "../../../components/OptionsBox";
import SearchInput from "../../../components/SearchInput";
import SearchResult from "../../../components/SearchResult";
import ConvoCurrentUser from "./ConvoCurrentUser";
const ConversationHeader = (props) => {
  const { showuseroptions, useroptions } = props;
  const [searchInputFocused, setSearchInputFocused] = useState(false);
  const [searchResultData, setSearchResultData] = useState([]);
  const [isUserSelected, setIsUserSelected] = useState(false);
  const newPersonHandler = (data) => {
    props.newConvoSelected(data);
    setSearchResultData([]);
    setIsUserSelected(!isUserSelected);
    setSearchInputFocused(false);
  };
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
          clearSearchInput={isUserSelected}
          searchResults={(v) => {
            setSearchResultData(v);
          }}
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
      {searchInputFocused || searchResultData.length > 0 ? (
        <div className="z-20 absolute bg-white w-full mc__search__results py-4">
          {searchResultData.map((data) => (
            <SearchResult
              newPersonSelected={() => newPersonHandler(data)}
              key={data._id}
              user={data}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ConversationHeader;
