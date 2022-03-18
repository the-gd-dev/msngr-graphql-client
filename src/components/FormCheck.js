import React from "react";

const FormCheck = (props) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer mb-4">
      <input
        className="cursor-pointer"
        type="checkbox"
        style={{
          ...props.style,
          height  : props.height || 18,
          width  : props.width || 18
        }}
        {...props}
      />
      <div className="text-lg text-gray-600"> {props.label}</div>
    </label>
  );
};

export default FormCheck;
