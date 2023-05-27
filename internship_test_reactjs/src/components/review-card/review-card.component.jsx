import { AiFillStar } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";

import formatDate from "../../utils/formatDate";
import {
  getCountryCodeFromName,
  getCountryNameFromCode,
  getCountrySlug,
} from "../../utils/countryUtils";

import "./review-card.styles.css";

const ReviewsCards = () => {
  const reviews = [
    {
      id: 1,
      appID: "com.myntra",
      appStoreName: "iOS",
      reviewDate: "23 Oct 2018 13:06:02",
      rating: "3",
      version: "v0.1",
      countryName: "US",
      reviewHeading: "Wonderful",
      reviewText: "Excellent application for works in pdf format",
      reviewUserName: "Alice6",
    },
    {
      id: 2,
      appID: "com.flipkart",
      appStoreName: "Google",
      reviewDate: "21 Sept 2019 13:06:02",
      rating: "1",
      version: "1.3",
      countryName: "Japan",
      reviewHeading: "Not working ",
      reviewText:
        "Usually can print out in A4. But now forced to print to a different size Can you adjust where?",
      reviewUserName: "U5",
    },
    {
      id: 1,
      appID: "com.myntra",
      appStoreName: "iOS",
      reviewDate: "23 Oct 2018 13:06:02",
      rating: "3",
      version: "v0.1",
      countryName: "US",
      reviewHeading: "Wonderful",
      reviewText: "Excellent application for works in pdf format",
      reviewUserName: "Alice6",
    },
    {
      id: 2,
      appID: "com.flipkart",
      appStoreName: "Google",
      reviewDate: "21 Sept 2019 13:06:02",
      rating: "1",
      version: "1.3",
      countryName: "Japan",
      reviewHeading: "Not working ",
      reviewText:
        "Usually can print out in A4. But now forced to print to a different size Can you adjust where?",
      reviewUserName: "U5",
    },
    {
      id: 3,
      appID: "com.myntra",
      appStoreName: "iOS",
      reviewDate: "22 Oct 2018 13:06:02",
      rating: "4",
      version: "v1.2.1",
      countryName: "Russia",
      reviewHeading: "Perfect. \uD83D\uDC4D",
      reviewText: "I don `t really understand",
      reviewUserName: "Amy",
    },
  ];

  return (
    <div className="reviews-cards-container overflow-y-scroll h-[69vh] mt-4 flex flex-col gap-2 p-2">
      {reviews.map((review, i) => {
        // Representing gold stars as 1's and silver as 0's
        const goldStars = Array(5).fill(0);
        goldStars.fill(1, 0, review?.rating);
        let countryCode = review.countryName,
          countryName = review.countryName;
        if (review.countryName.length > 2) {
          countryCode = getCountryCodeFromName(review.countryName);
        } else if (
          review.countryName.length === 2 &&
          review.countryName !== "UK"
        ) {
          countryName = getCountryNameFromCode(review.countryName);
        }

        // Exceptional case that doesn't work for the previous methods
        if (review.countryName === "UK") {
          countryCode = "GB";
          countryName = "United Kingdom";
        }

        const country = [
          <>
            <div className="flex gap-2 items-center">
              <img
                src={`https://cdn.countryflags.com/thumbs/${getCountrySlug(
                  countryName
                )}=/flag-400.png`}
                alt={` ${countryName} Flag`}
              />
              <div className="font-bold text-sm">{countryName}</div>
            </div>
          </>,
        ];

        const footerInfos = [
          review.reviewUserName,
          formatDate(review.reviewDate),
          review.version.toLowerCase(),
          country,
        ];

        return (
          <div
            className="flex flex-col gap-8 p-4 border-gray-300 rounded-md shadow-md"
            key={i}
          >
            <div className="card-header flex gap-4 items-center">
              <span className="bg-fuchsia-500 !min-w-[28px] !min-h-[28px] !max-w-[28px] !max-h-[28px] rounded-lg"></span>
              <span className="text-sm font-bold bg-gray-200 rounded px-2 py-1 text-xs">
                {review.appStoreName}
              </span>
              <span className="text-sm font-bold">{review.reviewHeading}</span>
              <div className="flex gap-4 items-center">
                <div className="stars flex">
                  {goldStars.map((item, i) => {
                    if (item === 1)
                      return (
                        <AiFillStar color={"#FFA500"} size={"20px"} key={i} />
                      );
                    return (
                      <AiFillStar color={"#cbd5e1"} size={"20px"} key={i} />
                    );
                  })}
                </div>
              </div>
              <span className="ml-auto uppercase font-extrabold text-xs border border-gray-500 px-2 py-[0.6px] rounded">
                Translated
              </span>
            </div>
            <div className="card-text text-md">{review.reviewText}</div>
            <div className="card-footer flex gap-4">
              {footerInfos.map((info, i) => {
                return (
                  <span className="font-bold text-xs" key={i}>
                    {info}
                  </span>
                );
              })}
              <div className="ml-auto flex gap-4">
                <button className="text-xs font-bold">reply</button>
                <button className="text-xs font-bold flex  items-center justify-around">
                  <span>share</span>
                  <RxCaretDown size={"20px"} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsCards;
