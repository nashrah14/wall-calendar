import React from "react";
import { HOLIDAYS } from "../utils/calendarUtils";

export default function HolidaysList({ month }) {
  const currentMonthHolidays = Object.entries(HOLIDAYS)
    .filter(([key]) => {
      const holidayMonth = parseInt(key.split("-")[0]);
      return holidayMonth === month + 1;
    })
    .sort((a, b) => parseInt(a[0].split("-")[1]) - parseInt(b[0].split("-")[1]));

  if (currentMonthHolidays.length === 0) return null;

  return (
    <div className="holidays-sidebar-section">
      <div className="notes-title">Public Holidays</div>
      <div className="holiday-items-list">
        {currentMonthHolidays.map(([key, name]) => (
          <div key={key} className="holiday-sidebar-item">
            <span className="holiday-date-pill">{key.split("-")[1]}</span>
            <span className="holiday-name-text">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}