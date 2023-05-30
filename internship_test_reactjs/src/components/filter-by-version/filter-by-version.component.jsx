import { AiOutlineCaretDown } from "react-icons/ai";

import countItemsByVersion from "../../utils/countItemsByVersion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVersionFilter } from "../../store/reviews/reviews.action";
import data from "../../data/reviewsData.json";
import { GrPowerReset } from "react-icons/gr";

const FilterByVersion = () => {
  const { reviews } = useSelector((state) => state.reviewsData);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // Set filter to default value at first time rendering
  useEffect(() => {
    dispatch(setVersionFilter(""));
  }, []);

  // Update the filter value whenever it changed here
  // useEffect(() => {
  //   console.log(versionFilterValue);
  //   dispatch(setVersionFilter(versionFilterValue));
  // }, [versionFilterValue]);

  // Get the different versions
  let globalItemsCount = countItemsByVersion(data);
  // set their count to default "0"
  globalItemsCount = Object.fromEntries(
    Object.keys(globalItemsCount).map((key) => [key, 0])
  );

  // Get the diffrent version counts based on current searched or filtered reviews
  let itemCounts = countItemsByVersion(reviews);

  // Mergin the two arrays to have different version and their count, 0 if it doesn't exist in the current reviews
  itemCounts = { ...globalItemsCount, ...itemCounts };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          className={`transition-transform	 ${open ? "" : "rotate-[-90deg] "}`}
        >
          <AiOutlineCaretDown />
        </button>
        <span className="font-bold text-sm">Filter By Version</span>
        {open && (
          <button
            className="bg-gray-200 border border-gray-300 rounded flex gap-2 justify-center items-center hover:bg-gray-100 p-1 ml-auto"
            onClick={(e) => {
              e.preventDefault();
              dispatch(setVersionFilter(""));
            }}
          >
            <GrPowerReset size={12} />
          </button>
        )}
      </div>
      {open && (
        <div className="flex flex-col gap-[3px]">
          {Object.keys(itemCounts).map((key) => {
            return (
              <div
                className="flex items-center justify-between cursor-pointer"
                key={key}
                onClick={(e) => {
                  e.preventDefault();
                  // dispatch(setRatingFilter(null));
                  dispatch(setVersionFilter(key));
                  // setVersionFilterValue(key);
                  console.log(key);
                }}
              >
                <div className="font-bold text-sm">
                  {key[0].toLowerCase() !== "v"
                    ? key
                    : key[1] === "."
                    ? key.substring(2)
                    : key.substring(1)}
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

export default FilterByVersion;
