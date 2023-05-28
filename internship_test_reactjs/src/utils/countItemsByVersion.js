const countItemsByVersion = (data) => {
  const versionCount = {};

  data.forEach((item) => {
    const version = item.version;

    // If the version is not in the versionCount object, initialize it with 1
    if (!versionCount[version]) {
      versionCount[version] = 1;
    }
    // Otherwise, increment the count for that version
    else {
      versionCount[version]++;
    }
  });

  return versionCount;
};

export default countItemsByVersion;
