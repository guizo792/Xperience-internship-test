import { useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";

const SelectInputWithCustomIcon = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="relative">
        <p className="absolute inset-y-[0px] left-0 flex items-center pl-3 font-bold !z-10 !bg-purple">
          <MdOutlineCalendarMonth size={"24px"} color={"#22222288"} />
        </p>
        <div className="select-container select-products-container">
          <select
            value={value}
            onChange={handleChange}
            className="select-input select-products-input !font-medium border border-gray-100 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-blue-500 !w-[14.7rem] !rounded-lg text-gray-700 "
          >
            {props.options.map((option, index) => {
              return (
                <option value={option.value} key={index}>
                  <div className="select-products-option">
                    <span className="select-input-text">{option.label}</span>
                  </div>
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectInputWithCustomIcon;
