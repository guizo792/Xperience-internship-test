import BodyLeftSide from "../body-left-side/body-left-side.component";
import BodyRightSide from "../body-right-side/body-right-side";

const MainBody = () => {
  return (
    <div className="main-body-container mt-8 border max-w-[100%] grow max-h-[90%] ">
      <BodyLeftSide />
      <BodyRightSide />
    </div>
  );
};

export default MainBody;
