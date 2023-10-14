'use client'

import { useTheme } from "next-themes";

import "./style.scss"

export const ToggleTheme = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

  return (
    <div className="toggle-theme flex items-center">
      <input
        checked={resolvedTheme === "dark"}
        type="checkbox"
        className="mode-toggle"
        onChange={toggleTheme}
        id="switch-theme"
      />
      <label className="mode-toggle-label" htmlFor="switch-theme">
        <svg
          width="45"
          height="25"
          viewBox="0 0 300 170"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bg-night">
              <stop className="bg-stop-start" offset="0%" />
              <stop className="bg-stop-end" offset="100%" />
            </linearGradient>
            <filter id="glow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#ffffff"
                floodOpacity="0.75"
              />
            </filter>
            <filter id="glow-mini">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="0.5"
                floodColor="#ffffff"
                floodOpacity="0.5"
              />
            </filter>
          </defs>
          <rect
            className="bg"
            width="300"
            height="170"
            rx="90"
            ry="90"
            fill="url(#bg-night)"
          />
          <circle
            className="source"
            cx="0"
            cy="0"
            r="70"
            fill="#ffffff"
            style={{ filter: "url(#glow)" }}
          />
          <g className="stars">
            <circle
              className="star-1"
              cx="190"
              cy="50"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
            <circle
              className="star-2"
              cx="250"
              cy="70"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
            <circle
              className="star-3"
              cx="220"
              cy="130"
              r="6"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
          </g>
        </svg>
      </label>
    </div>
  );
};
