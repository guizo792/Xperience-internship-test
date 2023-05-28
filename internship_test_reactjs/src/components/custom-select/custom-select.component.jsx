import React, { useState } from "react";

import { SlArrowDown } from "react-icons/sl";
import DropDownItem from "./drop-down-item.component";

const INITIAL_STATE = {
  name: "My app 2",
  color: "violet",
  value: "the value",
};

const dummyDropDownList = [
  {
    name: "My app 2",
    color: "orange",
    value: "the value1",
  },
  {
    name: "My app 5",
    color: "pink",
    value: "the value1",
  },
  {
    name: "My app 2",
    color: "yellow",
    value: "the value5",
  },
  {
    name: "My app 4",
    color: "green",
    value: "the value1",
  },
];

const CustomSelect = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [currentProduct, setCurrentProduct] = useState(INITIAL_STATE);

  const handelClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handelChoice = (item) => {
    setShowDropdown(false);

    setCurrentProduct({
      name: item.name,
      color: item.color,
      value: item.value,
    });
  };

  return (
    <div className="container relative w-select-input-right select-container">
      <div>select products</div>
      <div
        className="cursor-pointer h-[1.8rem] border border-[#80808081] px-1 pr-2  flex justify-between items-center w-full rounded-[4px] focus:ring-blue-500 focus:border-blue-500 outline-blue-500 select-products-container "
        onClick={handelClick}
      >
        <div className="flex items-center gap-3 ">
          <span
            className={`rounded w-[1.3rem] h-[1.3rem] min-w-[1.3rem] min-h-[1.3rem]`}
            style={{ backgroundColor: currentProduct.color }}
          ></span>
          <p className="text-gray-900 text-[0.9rem] font-bold">
            {currentProduct.name}
          </p>
        </div>
        <SlArrowDown size={14} />
      </div>

      {showDropdown && (
        <div className="z-40 absolute top-[3.6rem] dropdown options border-b border-l border-r border-gray-40  w-full bg-gray-50">
          {dummyDropDownList.map((item, index) => (
            <DropDownItem key={index} item={item} handelChoice={handelChoice} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
