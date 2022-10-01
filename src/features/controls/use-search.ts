import { useAppSelector, useAppDispatch } from "store";
import { ChangeEventHandler } from "react";

import { setSearch } from "./controls-slice";
import { selectSearch } from "./controls-selectors";

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  const handleSearch: onSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
