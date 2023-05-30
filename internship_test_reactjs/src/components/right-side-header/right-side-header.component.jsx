import { FaBell, FaDownload } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";
import WifiSignal from "../../assets/images/wifi-signal.png";
import Button from "../button/button.component";
import { useSelector } from "react-redux";

const RightSideHeader = () => {
  const { reviews, indexOfFirstReview, indexOfLastReview } = useSelector(
    (state) => state.reviewsData
  );

  return (
    <div className="flex items-center justify-between gap-12">
      <span className="text-sm font-bold">
        Viewing{" "}
        {reviews.length > 10
          ? indexOfFirstReview + "-" + indexOfLastReview
          : reviews.length}{" "}
        of {reviews.length} Reviews
      </span>
      <span className="flex gap-2">
        <Button>
          <span>
            <FaBell />
          </span>
          <span>Create Alert</span>
          <span>
            <IoMdArrowDropdown size="22px" />
          </span>
        </Button>
        <Button>
          <span>
            <img
              src={WifiSignal}
              alt=""
              className="min-w-[14px] max-w-[14px]"
            />
          </span>
          <span>
            <BiCodeCurly size="18px" />
          </span>
          <span>
            <FaDownload size="16" />
          </span>
        </Button>
      </span>
    </div>
  );
};

export default RightSideHeader;
