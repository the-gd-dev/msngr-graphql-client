import React from "react";
import CustomOption from "./CustomOption";

const OptionsBox = ({ items, customclassnames }) => {
  return (
    <div
      className={`${customclassnames} z-10 border border-gray-100 shadow-md absolute py-2 rounded-xl mc__options__box`}
    >
      {items.map((item) => (
        <CustomOption
          onClick={item.clickHandler}
          title={item.title}
          key={item._id}
        />
      ))}
    </div>
  );
};

export default OptionsBox;
