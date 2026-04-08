import React, { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";
import HolidaysList from "./HolidaysList"; 
import { dateKey, toTS, isSameDay, MONTHS } from "../utils/calendarUtils";
import "../styles/calendar.css";

export default function WallCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [notes, setNotes] = useState({});
  const [noteInput, setNoteInput] = useState("");
  const [theme, setTheme] = useState("light");
  const [imgLoaded, setImgLoaded] = useState(false);
  const [animDir, setAnimDir] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentNoteKey = rangeStart ? dateKey(rangeStart.y, rangeStart.m, rangeStart.d) : `${year}-${month + 1}`;

  useEffect(() => { setNoteInput(notes[currentNoteKey] || ""); }, [currentNoteKey, notes]);
  useEffect(() => { setImgLoaded(false); }, [month]);

  function navigate(dir) {
    if (isAnimating) return;
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      if (dir === -1) {
        if (month === 0) { setMonth(11); setYear(y => y - 1); }
        else setMonth(m => m - 1);
      } else {
        if (month === 11) { setMonth(0); setYear(y => y + 1); }
        else setMonth(m => m + 1);
      }
      setRangeStart(null); setRangeEnd(null);
      setAnimDir(null);
      setTimeout(() => setIsAnimating(false), 50);
    }, 280);
  }

  function handleDayClick(d) {
    const cell = { y: year, m: month, d };
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(cell); setRangeEnd(null);
    } else {
      if (isSameDay(cell, rangeStart)) { setRangeStart(null); return; }
      setRangeEnd(cell);
    }
  }

  const rangeLabel = () => {
    if (!rangeStart) return "Click a day to start selection";
    if (!rangeEnd) return `From ${MONTHS[rangeStart.m].slice(0, 3)} ${rangeStart.d} — select end date`;
    const [s, e] = toTS(rangeStart) < toTS(rangeEnd) ? [rangeStart, rangeEnd] : [rangeEnd, rangeStart];
    const diff = Math.round((toTS(e) - toTS(s)) / 86400000);
    return `${MONTHS[s.m].slice(0, 3)} ${s.d} → ${MONTHS[e.m].slice(0, 3)} ${e.d} (${diff} days)`;
  };

  return (
    <div className={`app-container ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <div className="cal-wrap">
        <div className="spiral">
          {Array.from({ length: 14 }).map((_, i) => <div key={i} className="spiral-dot" />)}
        </div>
        <div className={`calendar-card ${animDir === -1 ? "slide-out-right" : animDir === 1 ? "slide-out-left" : ""}`}>
          <CalendarHeader 
            month={month} year={year} navigate={navigate} 
            theme={theme} setTheme={setTheme} 
            imgLoaded={imgLoaded} setImgLoaded={setImgLoaded} 
          />
          <div className="cal-body">
            <div className="grid-section">
               <div className={`range-bar${rangeStart ? " active" : ""}`}>{rangeLabel()}</div>
               <CalendarGrid 
                 year={year} month={month} rangeStart={rangeStart} rangeEnd={rangeEnd}
                 hoveredDay={hoveredDay} setHoveredDay={setHoveredDay}
                 handleDayClick={handleDayClick} notes={notes}
               />
            </div>
            
            <div className="sidebar-section">
              <NotesPanel 
                rangeStart={rangeStart} rangeEnd={rangeEnd} month={month}
                noteInput={noteInput} setNoteInput={setNoteInput}
                saveNote={() => setNotes(n => ({ ...n, [currentNoteKey]: noteInput }))}
                notes={notes} noteKey={currentNoteKey}
              />
              <HolidaysList month={month} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}