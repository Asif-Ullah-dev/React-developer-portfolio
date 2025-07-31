import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCloudMoon, FaBolt, FaSnowflake } from "react-icons/fa";

const themes = ["light", "dark", "midnight", "neon", "glass"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    themes.forEach((t) => root.classList.remove(t));
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <FaSun className="text-xl" title="Light Mode" />;
      case "dark":
        return <FaMoon className="text-xl" title="Dark Mode" />;
      case "midnight":
        return <FaCloudMoon className="text-xl" title="Midnight Mode" />;
      case "neon":
        return <FaBolt className="text-xl" title="Neon Mode" />;
      case "glass":
        return <FaSnowflake className="text-xl" title="Glassmorphism Mode" />;
      default:
        return <FaSun className="text-xl" />;
    }
  };

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={cycleTheme}
      className="fixed bottom-20 right-6 z-50 bg-gray-700 text-white dark:bg-yellow-300 dark:text-black p-3 rounded-full shadow-md transition-all hover:scale-110"
    >
      {getIcon()}
    </button>
  );
}