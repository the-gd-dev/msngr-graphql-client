import React from "react";
const btnBgTextColorCombos = {
  danger: "bg-red-300 text-red-500 hover:bg-red-500 hover:text-white",
  primary:
    "bg-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white disabled:text-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed",
  warning: "bg-yellow-300 text-yellow-500 hover:bg-yellow-500 hover:text-white",
  success: "bg-green-300 text-green-500 hover:bg-green-500 hover:text-white",
  info: "bg-teal-300 text-teal-500 hover:bg-teal-500 hover:text-white",
};
const FormBtn = (props) => {
  return (
    <button
      {...props}
      style={{
        ...props.style,
        fontSize: props.fontSize || 18,
        height: props.height || 30,
      }}
      className={`${
        btnBgTextColorCombos[props.btntype]
      } px-5 w-full py-4 rounded-xl flex w-full space-x-2 items-center justify-center`}
    >
      {props.disabled ? (
        <div className="h-6 w-6 border-4 rounded-full border-blue-500 border-t-blue-100 animate-spin"></div>
      ) : null}
      <span>{props.btntext}</span>
    </button>
  );
};

export default FormBtn;
