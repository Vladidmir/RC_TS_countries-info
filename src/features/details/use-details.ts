import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { clearDetails, loadCountryByName } from "./details-slice";
import { selectDetails } from "./details-selectors";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
