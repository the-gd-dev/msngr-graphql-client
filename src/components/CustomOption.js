import React from "react";

const CustomOption = (props) => {
  return (
    <div
      {...props}
      className="text-md font-semibold text-left py-1 px-4 option__custom cursor-pointer"
    >
      {props.title}
    </div>
  );
};

export default CustomOption;
