import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === 'light' ? (
          <IconMoon className="h-5 w-5" />
        ) : (
          <IconSun className="h-5 w-5" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
