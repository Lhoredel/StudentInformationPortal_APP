import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const events = {
    1: "Enrollment",
    5: "Midterm Exam",
    10: "Orientation",
    12: "Library Update",
    15: "Clean-Up Drive",
  };

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div
        className={`calendar-day ${
          events[day] ? "has-event" : ""
        }`}
        key={day}
      >
        <span className="day-number">{day}</span>

        {events[day] && (
          <div className="calendar-event">
            {events[day]}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="calendar-page">
      <div className="page-header">
        <div>
          <h1>Calendar</h1>
          <p>View important academic events and schedules.</p>
        </div>

        <div className="calendar-icon">
          <CalendarDays size={24} />
        </div>
      </div>

      <div className="calendar-card">
        <div className="calendar-header">
          <button onClick={previousMonth}>
            <ChevronLeft size={20} />
          </button>

          <h2>
            {monthName} {year}
          </h2>

          <button onClick={nextMonth}>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-grid">
          {days}
        </div>
      </div>
    </div>
  );
}

export default Calendar;