import React, { useState } from "react";
import { MONTHS } from "../utils/calendarUtils";

function SaveButton({ onClick, noteInput }) {
  const [saved, setSaved] = useState(false);
  return (
    <button className={`save-btn${saved ? " saved" : ""}`} onClick={() => { onClick(); setSaved(true); setTimeout(() => setSaved(false), 1800); }}>
      {saved ? "✓ Saved" : "Save ⌘S"}
    </button>
  );
}

export default function NotesPanel({ rangeStart, rangeEnd, month, noteInput, setNoteInput, saveNote, notes, noteKey }) {
  return (
    <div className="notes-section">
      <div className="notes-title">Notes</div>
      <div className="notes-subtitle">
        {rangeStart ? `${MONTHS[rangeStart.m].slice(0, 3)} ${rangeStart.d}${rangeEnd ? ` – ${rangeEnd.d}` : ""}` : MONTHS[month]}
      </div>
      <textarea
        className="note-textarea"
        placeholder="Add a note..."
        value={noteInput}
        onChange={e => setNoteInput(e.target.value)}
        onKeyDown={e => { if ((e.metaKey || e.ctrlKey) && e.key === "s") { e.preventDefault(); saveNote(); } }}
      />
      <SaveButton onClick={saveNote} noteInput={noteInput} />

      {Object.entries(notes).filter(([, v]) => v).length > 0 && (
        <div className="notes-list">
          {Object.entries(notes).filter(([, v]) => v).slice(-3).map(([k, v]) => (
            <div key={k} className="note-item">
              <div className="note-dot" />
              <span><strong>{k}:</strong> {v.slice(0, 40)}{v.length > 40 ? "…" : ""}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}