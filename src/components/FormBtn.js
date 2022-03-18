import React from "react";
const btnBgTextColorCombos = {
  danger: "bg-red-300 text-red-500 hover:bg-red-500 hover:text-white",
  primary: "bg-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white",
  warning: "bg-yellow-300 text-yellow-500 hover:bg-yellow-500 hover:text-white",
  success: "bg-green-300 text-green-500 hover:bg-green-500 hover:text-white",
  info: "bg-teal-300 text-teal-500 hover:bg-teal-500 hover:text-white",
};
const FormBtn = (props) => {
  return (
    <button
      {...props}
      style={
        {
            ...props.style,
            fontSize : props.fontSize || 18,
            height : props.height || 30
        }
      }
      className={`${btnBgTextColorCombos[props.btntype]} px-5 w-full py-4 rounded-xl flex w-full items-center justify-center`}
    >
      <span>{props.btntext}</span>
    </button>
  );
};

export default FormBtn;
