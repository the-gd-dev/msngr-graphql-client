import React from "react";

export const CustomBtn = ({ children, size, customclassnames }) => {
  let _size = {
    xsm: "w-4 h-4",
    sm: "w-9 h-9",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };
  return (
    <button className={`${_size[size]} ${customclassnames} rounded-full flex justify-between items-center`}>
      {children}
    </button>
  );
};
