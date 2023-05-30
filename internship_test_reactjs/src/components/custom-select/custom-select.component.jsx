import React, { useEffect, useState } from "react";

import { countItemsByApp } from "../../utils/countryItemsByApp";

import { SlArrowDown } from "react-icons/sl";
import DropDownItem from "./drop-down-item.component";
import { useDispatch, useSelector } from "react-redux";
import { setAppFilter } from "../../store/reviews/reviews.action";

import data from "../../data/reviewsData.json";

const INITIAL_STATE = {
  name: "All",
  color: "violet",
  value: "",
};

// const dummyDropDownList = [
//   {
//     name: "My app 2",
//     color: "orange",
//     value: "the value1",
//   },
//   {
//     name: "My app 5",
//     color: "pink",
//     value: "the value1",
//   },
//   {
//     name: "My app 2",
//     color: "yellow",
//     value: "the value5",
//   },
//   {
//     name: "My app 4",
//     color: "green",
//     value: "the value1",
//   },
// ];

const colors = ["violet", "orange", "gray", "pink", "green", "blue", "yellow"];
const CustomSelect = () => {
  const { reviews } = useSelector((state) => state.reviewsData);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(INITIAL_STATE);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppFilter(""));
  }, []);

  // Get the different versions
  let globalItemsCount = countItemsByApp(data);

  // set their count to default "0"
  globalItemsCount = Object.fromEntries(
    Object.keys(globalItemsCount).map((key) => [key, 0])
  );

  // Get the count of items for each country
  let itemCounts = countItemsByApp(reviews);

  // Mergin the two arrays to have different version and their count, 0 if it doesn't exist in the current reviews
  itemCounts = { ...globalItemsCount, ...itemCounts };

  const dropDownList = Object.keys(itemCounts).map((item, i) => {
    return {
      name: item.split(".")[1],
      color: colors[i % colors.length],
      value: item,
    };
  });

  dropDownList.unshift({
    name: "All",
    color: "green",
    value: "",
  });

  const handelClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handelChoice = (item) => {
    setShowDropdown(false);
    // Update component state
    setCurrentProduct({
      name: item.name,
      color: item.color,
      value: item.value,
    });

    // Update the global state to trigger filtering process by selected app
    dispatch(setAppFilter("com." + item.name));
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
            className={`rounded w-[1.3rem] h-[1.3rem] min-w-[1.3rem] min-h-[1.3rem] border border-gray-200`}
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
          {dropDownList.map((item, index) => (
            <DropDownItem key={index} item={item} handelChoice={handelChoice} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
