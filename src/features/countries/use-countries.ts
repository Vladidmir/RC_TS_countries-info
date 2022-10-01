import { useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";

import { selectControls } from "features/controls/controls-selectors";
import { loadCountries } from "./countries-slice";
import { Country } from "types";
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-selectors";

export const useCountries = (): [
  Country[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const controls = useAppSelector(selectControls);
  const countries = useAppSelector((state) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, qty } = useAppSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
