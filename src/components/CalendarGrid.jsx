import React from "react";
import { DAYS, MONTHS, HOLIDAYS, getDaysInMonth, getFirstDayOfMonth, isSameDay, isBetween, dateKey } from "../utils/calendarUtils";

export default function CalendarGrid({ year, month, rangeStart, rangeEnd, hoveredDay, setHoveredDay, handleDayClick, notes }) {
  const today = new Date();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const previewEnd = hoveredDay && rangeStart && !rangeEnd ? hoveredDay : null;

  const holidayToday = HOLIDAYS[`${month + 1}-${today.getDate()}`];

  return (
    <div className="grid-section">
      <div className="day-headers">
        {DAYS.map((d, i) => (
          <div key={d} className={`day-header${i >= 5 ? " weekend" : ""}`}>{d}</div>
        ))}
      </div>

      <div className="days-grid">
        {cells.map((d, i) => {
          if (!d) return <div key={`e${i}`} className="day-cell empty" />;
          const cell = { y: year, m: month, d };
          const isStart = isSameDay(cell, rangeStart);
          const isEnd = isSameDay(cell, rangeEnd);
          const inRange = isBetween(cell, rangeStart, rangeEnd ?? previewEnd);
          const isToday = year === today.getFullYear() && month === today.getMonth() && d === today.getDate();
          const colIdx = (firstDay + d - 1) % 7;
          
          let cls = "day-cell";
          if (isStart) cls += " range-start";
          else if (isEnd) cls += " range-end";
          else if (inRange) {
            cls += " in-range";
            if (colIdx === 0) cls += " first-in-row";
            if (colIdx === 6) cls += " last-in-row";
          }
          if (isToday) cls += " today";
          if (colIdx >= 5 && !isStart && !isEnd) cls += " weekend-day";
          if (notes[dateKey(year, month, d)]) cls += " has-note";
          if (HOLIDAYS[`${month + 1}-${d}`]) cls += " holiday-day";

          return (
            <div
              key={d}
              className={cls}
              onClick={() => handleDayClick(d)}
              onMouseEnter={() => setHoveredDay(cell)}
              onMouseLeave={() => setHoveredDay(null)}
              title={HOLIDAYS[`${month + 1}-${d}`] || ""}
            >{d}</div>
          );
        })}
      </div>
      {holidayToday && <div className="holiday-strip">✦ {holidayToday}</div>}
    </div>
  );
}