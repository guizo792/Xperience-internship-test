import React, { useState } from "react";
import { getCountrySlug } from "../../utils/countryUtils";

const FlagComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getFlagUrl = () => {
    // Construct the flag URL based on the country name slug
    const countrySlug = getCountrySlug("Morocco"); // Replace with the appropriate property from your data
    return `https://cdn.countryflags.com/thumbs/${countrySlug}/flag-400.png`;
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <h2>{"Morocco"}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={getFlagUrl()}
          alt={"Morocco"}
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />
      )}
    </div>
  );
};

export default FlagComponent;
