import { FC } from "react";
import { NavigateFunction } from "react-router-dom";
import { Info } from "./Info";
import { useDetails } from "./use-details";

interface ICountryDetailsProps {
  name?: string;
  navigate: NavigateFunction;
}

const CountryDetails: FC<ICountryDetailsProps> = ({ name = "", navigate }) => {
  const { status, error, currentCountry } = useDetails(name);

  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export { CountryDetails };
