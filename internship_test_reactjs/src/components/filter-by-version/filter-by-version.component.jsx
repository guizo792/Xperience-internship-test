import { AiOutlineCaretDown, AiFillStar } from "react-icons/ai";

import countItemsByVersion from "../../utils/countItemsByVersion";
import { useState } from "react";

const FilterByVersion = () => {
  const [open, setOpen] = useState(false);

  // Get the count of items for each version
  const itemCounts = countItemsByVersion();

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
        <span className="font-bold text-sm">Filter By Version</span>
      </div>
      {open && (
        <div className="flex flex-col gap-[3px]">
          {Object.keys(itemCounts).map((key) => {
            return (
              <div className="flex items-center justify-between" key={key}>
                <div className="font-bold text-sm">
                  {key[1] === "." ? key.substring(2) : key.substring(1)}
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
