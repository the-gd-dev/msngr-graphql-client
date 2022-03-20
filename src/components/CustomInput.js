import React from "react";

export const CustomInput = (props) => {
  return (
    <input
      {...props}
      type="text"
      className={`bg-gray-100 text-black rounded-full ${props.customclassnames} w-full outline-0`}
    />
  );
};
