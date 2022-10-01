import { useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";
import { loadNeighborsByBorder } from "./details-slice";
import { selectNeighbors } from "./details-selectors";

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbors = useAppSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
