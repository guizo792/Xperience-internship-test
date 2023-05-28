import FilterByCountry from "../filter-by-country/filter-by-country.component";
import FilterByRating from "../filter-by-rating/filter-by-rating.component";
import FilterByVersion from "../filter-by-version/filter-by-version.component";
import SearchInput from "../search-input/search-input.component";
import SelectInputWithCustomIcon from "../select-input-with-icon/select-input-changed-icon";

const BodyLeftSide = () => {
  return (
    <div className="no-scrollbar-container main-left-side-container p-4 flex flex-col gap-4 max-w-[16.4rem] overflow-y-scroll">
      <SearchInput />
      <SelectInputWithCustomIcon
        options={[{ value: "all time", label: "all time" }]}
      />
      <FilterByRating />
      <FilterByVersion />
      <FilterByCountry />
    </div>
  );
};

export default BodyLeftSide;
