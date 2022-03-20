import React from "react";
import { ArrLeft } from "./ArrLeft";
import { CustomBtn } from "./CustomBtn";
import { CustomInput } from "./CustomInput";
import { SearchIcon } from "./SearchIcon";

const SearchInput = (props) => {
  return (
    <div className="flex items-center space-x-2">
      <CustomBtn
        size="md"
        customclassnames="mt-5 bg-gray-100 hover:bg-gray-300"
      >
        <ArrLeft />
      </CustomBtn>
      <label className="w-full  flex w-full relative">
        <span className="text-lg absolute top-7 left-4">
          <SearchIcon />
        </span>
        <CustomInput
          placeholder="Search Messenger Clone"
          customclassnames="h-9 pl-10 mt-5"
        />
      </label>
    </div>
  );
};

export default SearchInput;
