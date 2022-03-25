import React from "react";
import ProfilePicture from "./ProfilePicture";

const SearchResult = (props) => {
  const { user } = props;
  return (
    <div
      onClick={props.newPersonSelected}
      className="flex space-x-3 items-center hover:bg-gray-100 rounded-md py-2 px-4 cursor-pointer"
    >
      <ProfilePicture
        style={{
          height: 45,
          width: 45,
        }}
        customclassnames="border-2"
        url={user.profilePicture}
      />
      <div className="text-lg font-semibold">{user.name}</div>
    </div>
  );
};

export default SearchResult;
