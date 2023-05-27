import ReviewsCards from "../review-card/review-card.component";
import RightSideHeader from "../right-side-header/right-side-header.component";

const BodyRightSide = () => {
  return (
    <div className="main-right-side-container w-[60vw] min-w-[60%] max-w-[65rem] px-4 py-[20px] border-l border-gray-300 ml-3 ">
      <RightSideHeader />
      <ReviewsCards />
    </div>
  );
};

export default BodyRightSide;
