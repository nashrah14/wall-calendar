 # Digital wall-calendar
A sophisticated, highly interactive React-based wall calendar featuring dynamic theme switching, date range selection, and integrated Indian Government holidays. Designed with a focus on minimalist aesthetics and smooth user experience.

**✨ [Live Demo](https://wall-calendar-five-theta.vercel.app/)**

---

## 🚀 Features

- **Dynamic Navigation:** Smooth, animated transitions between months and years.
- **Date Range Selection:** Interactive "click-to-select" range logic with real-time duration calculation (in days).
- **Indian Public Holidays:** Integrated database of Indian Gazetted and Restricted holidays for 2026, highlighted specifically for local relevance.
- **Contextual Note-Taking:** A side panel to save personal notes for specific dates or ranges, featuring persistent text states.
- **Dual Theme Support:** High-contrast Dark Mode and an "Aesthetic Cream" Light Mode with full-page transitions.
- **Responsive Design:** Mobile-first architecture that stacks the sidebar on small screens and scales the grid for touch devices.
- **Smart UI:** Sundays and holidays are automatically color-coded in red for quick identification.

---

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/) (Functional Components & Hooks)
- **Styling:** CSS3 (Custom Variables, Flexbox, Grid, Keyframe Animations)
- **Icons & Fonts:** Google Fonts (Playfair Display & DM Sans)
- **Deployment:** Vercel

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── WallCalendar.jsx    # Main application logic & state management
│   ├── CalendarHeader.jsx  # Navigation & Month/Year display
│   ├── CalendarGrid.jsx    # Core date generation logic
│   ├── NotesPanel.jsx      # Sidebar note-taking interface
│   └── HolidaysList.jsx    # Monthly holiday filtering & display
├── styles/
│   └── calendar.css        # Global styles and Responsive design
└── utils/
    └── calendarUtils.js    # Holiday data and date helper functions

```
---
## 🎨 Design Philosophy
The project was built using a Minimalist Aesthetic approach. By leveraging CSS Grid for the calendar layout and CSS Variables for theming, the application maintains high performance while providing a "premium" feel. The use of a Monday-start week reflects modern professional scheduling standards and optimizes the visual grouping of the work week versus the weekend.

---
<div align="center">
  <h3>Developed with ❤️ by Nashrah Fathima</h3>
</div>
