import React from "react";

const FormInput = (props) => {
  const fieldID = (value) =>
    value ? value.replace(" ", "_").toLowerCase() : "";
  const labelID = props.label
    ? fieldID(props.label)
    : fieldID(props.placeholder);
  return (
    <div className="flex flex-col w-full  mb-4">
      <label htmlFor={labelID}>{props.label}</label>
      <input
        id={labelID}
        style={{
          ...props.style,
          height: props.height,
          width: props.width,
          fontSize: props.fontSize || 18,
        }}
        {...props}
        className={`w-full border rounded-xl px-4 ${props.errors && props.errors.length > 0 ? 'border border-red-400' : ''}`}
      />
      {props.errors && props.errors.length > 0 ? <div className="text-red-400">{props.errors[0]}</div> : null}
    </div>
  );
};

export default FormInput;
