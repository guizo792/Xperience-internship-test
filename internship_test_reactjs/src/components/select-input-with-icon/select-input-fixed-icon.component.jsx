import { useState } from "react";

const SelectInputWithIcon = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="relative">
        <p className="absolute inset-y-[43.2px] left-0 flex items-center pl-3 font-bold !z-10 !bg-purple">
          <button className="bg-fuchsia-500 w-6 h-6 rounded"></button>
        </p>
        <div className="select-container select-products-container">
          <label>{props.label}</label>
          <select
            value={value}
            onChange={handleChange}
            className="select-input select-products-input border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-blue-500"
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

export default SelectInputWithIcon;
