import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { selectTheme } from "./theme-selectors";
import { setTheme } from "./theme-slice";
import { Theme } from "./theme-slice";

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
