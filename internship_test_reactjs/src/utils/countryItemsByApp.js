export const countItemsByApp = (data) => {
  const appCount = {};

  data.forEach((item) => {
    const app = item.appID;

    // If the country is not in the countryCount object, initialize it with 1
    if (!appCount[app]) {
      appCount[app] = 1;
    }
    // Otherwise, increment the count for that country
    else {
      appCount[app]++;
    }
  });

  return appCount;
};
