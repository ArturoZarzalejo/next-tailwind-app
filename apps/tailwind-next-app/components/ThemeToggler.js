"use client";

import { useTheme } from "next-themes";

const ThemeToggler = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={`${className} text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md`}
      onClick={() => {
        setTheme((theme === "light" && "dark") || "light");
      }}
    >
      {(theme === "light" && `Dark Theme`) || `Light Theme`}
    </button>
  );
};

export default ThemeToggler;
