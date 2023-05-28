import ReviewsPageHeader from "./components/reviews-page-header/reviews-page-header.component";
import MainBody from "./components/main-body/main-body.component";

import "./App.css";

function App() {
  return (
    <div className="body-container flex flex-col items-center h-[100vh]">
      {/** header */}
      <ReviewsPageHeader />
      {/** main body */}
      <MainBody />
    </div>
  );
}

export default App;
