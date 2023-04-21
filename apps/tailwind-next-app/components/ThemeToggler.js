'use client';

import { useTheme } from 'next-themes';
import { ReactComponent as Sun } from '../public/sun.svg';
import { ReactComponent as Moon } from '../public/moon.svg';

const ThemeToggler = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={`flex items-center justify-center gap-2 ${className} text-white dark:text-black bg-[#0C0D0D] dark:bg-white font-semibold text-sm rounded-md`}
      onClick={() => setTheme((theme === 'light' && 'dark') || 'light')}
    >
      {(theme === 'light' && <Moon className="w-6 h-6" />) || (
        <Sun className="w-6 h-6" />
      )}
      {(theme === 'light' && `Dark`) || `Light`}
    </button>
  );
};

export default ThemeToggler;
