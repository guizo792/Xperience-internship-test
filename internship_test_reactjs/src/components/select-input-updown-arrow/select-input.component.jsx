import { useState } from "react";

import "../select-input-with-icon/select-input.styles.css";

const SelectInputUpDownArrow = (props) => {
  // eslint-disable-next-line no-undef
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="select-container sorting-container">
      <label>{props.label}</label>
      <select
        value={value}
        onChange={handleChange}
        className="select-input select-updown-arrow  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-blue-500"
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
  );
};

export default SelectInputUpDownArrow;
