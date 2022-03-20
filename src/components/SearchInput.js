import React, { useEffect, useState } from "react";
import { ArrLeft } from "./ArrLeft";
import { CustomBtn } from "./CustomBtn";
import { CustomInput } from "./CustomInput";
import { SearchIcon } from "./SearchIcon";
import axios from "../axios";
const SearchInput = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (searchQuery) {
      (async function () {
        let graphqlQuery = `
        {
          searchUsers( query : "${searchQuery}" ) {
            _id
            name
            email
            profilePicture
            createdAt
          }
        }
      `;
        try {
          let { data } = await axios.post("/graphql", { query: graphqlQuery });
          if (data?.data?.searchUsers) {
            props.searchResults(data.data.searchUsers);
          } else {
            props.searchResults([]);
          }
        } catch (error) {
          console.log("query errors");
          props.searchResults([]);
        }
      })();
    } else {
      props.searchResults([]);
    }
  }, [searchQuery]);
  const backHandler = () => {
    setSearchQuery("");
    props.isInputBlurHandler();
  };
  return (
    <div className="flex items-center space-x-2">
      {props.isInputFocused || !!searchQuery ? (
        <CustomBtn
          onClick={backHandler}
          size="sm"
          customclassnames="mt-5 bg-gray-100 hover:bg-gray-300"
        >
          <ArrLeft />
        </CustomBtn>
      ) : null}
      <label className="w-full  flex w-full relative">
        {!searchQuery ? (
          <span className="text-lg absolute top-7 left-4">
            <SearchIcon />
          </span>
        ) : null}
        <CustomInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => props.isInputFocusHandler()}
          onBlur={() => props.isInputBlurHandler()}
          placeholder="Search Messenger Clone"
          customclassnames={`h-9 ${searchQuery ? "pl-4" : "pl-10"} mt-5`}
        />
      </label>
    </div>
  );
};

export default SearchInput;
