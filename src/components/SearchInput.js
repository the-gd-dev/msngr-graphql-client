import React, { useState } from "react";
import { ArrLeft } from "./ArrLeft";
import { CustomBtn } from "./CustomBtn";
import { CustomInput } from "./CustomInput";
import { SearchIcon } from "./SearchIcon";

const SearchInput = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex items-center space-x-2">
      {!!searchQuery ? (
        <CustomBtn
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
          placeholder="Search Messenger Clone"
          customclassnames={`h-9 ${searchQuery ? "pl-4" : "pl-10"} mt-5`}
        />
      </label>
    </div>
  );
};

export default SearchInput;
