import { useAppDispatch, useAppSelector } from "store";

import { setRegion } from "./controls-slice";
import { CountryOption } from "./CustomSelect";

import { selectRegion } from "./controls-selectors";
import { Region } from "types";
import { SingleValue } from "react-select";

type onSelect = (req: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | "", onSelect] => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value || ""));
    } else {
      dispatch(setRegion(""));
    }
  };

  return [region, handleSelect];
};
