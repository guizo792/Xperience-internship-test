import SelectInputUpDownArrow from "../select-input-updown-arrow/select-input.component";
import SelectInputWithIcon from "../select-input-with-icon/select-input-fixed-icon.component";
import CustomSelect from "../custom-select/custom-select.component";

const ReviewsPageHeader = () => {
  return (
    <div className="header-container w-[60vw] min-w-[60%]">
      {/* <SelectInputWithIcon
        label={"select products"}
        options={[
          { value: "My App + 2", label: "My App + 2" },
          { value: "My App + 2", label: "My App + 2" },
        ]}
      /> */}
      <CustomSelect />

      <div className="header-righ-side">
        <SelectInputUpDownArrow
          label={"sorting"}
          options={[
            { value: "Newest first", label: "Newest first" },
            { value: "Oldest first", label: "Oldest first" },
          ]}
        />

        <SelectInputUpDownArrow
          label={"translation"}
          options={[
            { value: "English", label: "English" },
            { value: "French", label: "French" },
          ]}
        />
      </div>
    </div>
  );
};

export default ReviewsPageHeader;
