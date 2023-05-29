import { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

import data from "../../data/reviewsData.json";

import {
  countItemsByCountry,
  getCountryCodeFromName,
  getCountryNameFromCode,
} from "../../utils/countryUtils";
import CountryFlag from "../country-flag/country-flag.component";
import { useDispatch, useSelector } from "react-redux";
import { setCountryFilter } from "../../store/reviews/reviews.action";

const FilterByCountry = () => {
  const { reviews } = useSelector((state) => state.reviewsData);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountryFilter(""));
  }, []);

  // Get the different versions
  let globalItemsCount = countItemsByCountry(data);
  // set their count to default "0"
  globalItemsCount = Object.fromEntries(
    Object.keys(globalItemsCount).map((key) => [key, 0])
  );

  // Get the count of items for each country
  let itemCounts = countItemsByCountry(reviews);

  // Mergin the two arrays to have different version and their count, 0 if it doesn't exist in the current reviews
  itemCounts = { ...globalItemsCount, ...itemCounts };

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
                className="flex gap-2 items-center justify-between cursor-pointer"
                key={key}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setCountryFilter(key));
                  console.log(key);
                }}
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
