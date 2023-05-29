import { countries } from "countries-list";
// import data from "../data/reviewsData.json";

export const countItemsByCountry = (data) => {
  const countryCount = {};

  data.forEach((item) => {
    const country = item.countryName;

    // If the country is not in the countryCount object, initialize it with 1
    if (!countryCount[country]) {
      countryCount[country] = 1;
    }
    // Otherwise, increment the count for that country
    else {
      countryCount[country]++;
    }
  });

  return countryCount;
};

export const getCountryCodeFromName = (countryName) => {
  const countryEntries = Object.entries(countries);

  for (const [countryCode, countryData] of countryEntries) {
    if (countryData.name === countryName) {
      return countryCode;
    }
  }

  return null; // Country name not found
};

export function getCountryNameFromCode(countryCode) {
  const countryData = countries[countryCode];

  if (countryData) {
    return countryData.name;
  }

  return null; // Country code not found
}

export const getCountryInfo = (countries, countryCode) => {
  const country = countries[countryCode];

  if (country) {
    const countryName = country.name;
    const countryFlag = country.emoji;

    console.log(`Country: ${countryName}`);
    console.log(`Flag: ${countryFlag}`);
  } else {
    console.log("Invalid country code");
  }
};
