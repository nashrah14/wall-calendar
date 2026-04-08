import React from "react";
import { MONTHS, MONTH_IMAGES } from "../utils/calendarUtils";

export default function CalendarHeader({ month, year, navigate, theme, setTheme, imgLoaded, setImgLoaded }) {
  const isDark = theme === "dark";

  return (
    <div className="img-section">
      {!imgLoaded && <div className="img-skeleton" />}
      <img
        className={`img-bg${imgLoaded ? " loaded" : ""}`}
        src={MONTH_IMAGES[month]}
        alt={MONTHS[month]}
        onLoad={() => setImgLoaded(true)}
      />
      <button className="nav-btn nav-prev" onClick={() => navigate(-1)}>‹</button>
      <button className="nav-btn nav-next" onClick={() => navigate(1)}>›</button>
      <button className="theme-toggle" onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
        {isDark ? "☀ Light" : "◑ Dark"}
      </button>
      <div className="month-badge">
        <div className="year-label">{year}</div>
        <div className="month-year">{MONTHS[month]}</div>
      </div>
    </div>
  );
}