import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <>
          <span className="sr-only">Switch to dark theme</span>
        </>
      ) : (
        <>
          <span className="sr-only">Switch to bright theme</span>
        </>
      )}
    </button>
  );
}
