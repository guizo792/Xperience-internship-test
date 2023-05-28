const CountryFlag = ({ countryCode }) => {
  return (
    <img
      // src={`https://flagsapi.com/${countryCode}/flat/24.png}=/flag-400.png`}
      src={`https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@master/flags/4x3/${countryCode}.svg`}
      alt={` ${countryCode} Flag`}
      width={24}
      className="rounded-[3.6px] border"
    />
  );
};

export default CountryFlag;
