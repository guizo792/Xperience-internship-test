import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

import {
  countItemsByCountry,
  getCountryCodeFromName,
  getCountryNameFromCode,
} from "../../utils/countryUtils";
import CountryFlag from "../country-flag/country-flag.component";

const FilterByCountry = () => {
  const [open, setOpen] = useState(false);

  // console.log(getCountryInfo(countries, "US"));
  // Get the count of items for each country
  const itemCounts = countItemsByCountry();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          className={`transition-transform	 ${open ? "" : "rotate-[-90deg] "}`}
        >
          <AiOutlineCaretDown />
        </button>
        <span className="font-bold text-sm">Filter By Country</span>
      </div>
      {open && (
        <div className="flex flex-col gap-[3px]">
          {Object.keys(itemCounts).map((key) => {
            let countryCode = key,
              countryName;
            if (key.length > 2) {
              countryCode = getCountryCodeFromName(key);
              countryName = key;
            } else if (key.length === 2 && key !== "UK") {
              countryName = getCountryNameFromCode(key);
            }

            // Exceptional case that doesn't work for the previous methods
            if (key === "UK") {
              countryCode = "GB";
              countryName = "United Kingdom";
            }

            return (
              <div
                className="flex gap-2 items-center justify-between"
                key={key}
              >
                <div className="flex gap-2 items-center">
                  <CountryFlag countryCode={countryCode.toLowerCase()} />
                  <div className="font-bold text-sm">{countryName}</div>
                </div>
                <div className="rating-count text-gray-500">
                  {itemCounts[key]}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterByCountry;
