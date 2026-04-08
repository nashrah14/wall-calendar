export const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export const MONTH_IMAGES = [
  "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=800&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
  "https://images.unsplash.com/photo-1490750967868-88df5691cc02?w=800&q=80",
  "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
  "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=800&q=80",
  "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80",
];

// src/utils/calendarUtils.js

export const HOLIDAYS = {
  // Gazetted (Mandatory) Holidays 2026
  "1-26": "Republic Day",
  "3-4": "Holi",
  "3-21": "Id-ul-Fitr",
  "3-26": "Ram Navami",
  "3-31": "Mahavir Jayanti",
  "4-3": "Good Friday",
  "5-1": "Buddha Purnima",
  "5-27": "Id-ul-Zuha (Bakrid)",
  "6-26": "Muharram",
  "8-15": "Independence Day",
  "8-26": "Id-e-Milad",
  "9-4": "Janmashtami",
  "10-2": "Mahatma Gandhi Jayanti",
  "10-20": "Dussehra",
  "11-8": "Diwali",
  "11-24": "Guru Nanak Jayanti",
  "12-25": "Christmas Day",

  "1-1": "New Year's Day",
  "1-14": "Pongal / Makar Sankranti",
  "2-15": "Maha Shivaratri",
  "3-19": "Ugadi / Gudi Padwa",
  "8-28": "Raksha Bandhan",
  "9-14": "Ganesh Chaturthi",
  "10-31": "Halloween", 
  "11-15": "Chhath Puja"
};

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year, month) {
  let d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1; 
}

export function dateKey(y, m, d) { return `${y}-${m+1}-${d}`; }

export function isSameDay(a, b) { return a && b && a.y===b.y && a.m===b.m && a.d===b.d; }

export function toTS({y,m,d}) { return new Date(y,m,d).getTime(); }

export function isBetween(cell, start, end) {
  if (!start || !end) return false;
  const [s, e] = toTS(start) < toTS(end) ? [start, end] : [end, start];
  const t = toTS(cell);
  return t > toTS(s) && t < toTS(e);
}