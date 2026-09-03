import { useState } from "react";
import {
  Search,
  Megaphone,
  CalendarDays,
  Clock,
  Pin,
} from "lucide-react";

function Announcements() {
  const [search, setSearch] = useState("");

  const announcements = [
    {
      title: "Enrollment for 2nd Semester",
      date: "September 1, 2026",
      time: "8:00 AM",
      category: "Academic",
      pinned: true,
    },
    {
      title: "Midterm Examination Schedule",
      date: "September 5, 2026",
      time: "10:00 AM",
      category: "Examination",
      pinned: true,
    },
    {
      title: "Student Orientation Program",
      date: "September 10, 2026",
      time: "9:00 AM",
      category: "Event",
      pinned: false,
    },
    {
      title: "Library Schedule Update",
      date: "September 12, 2026",
      time: "7:00 AM",
      category: "General",
      pinned: false,
    },
    {
      title: "Campus Clean-Up Drive",
      date: "September 15, 2026",
      time: "8:00 AM",
      category: "Activity",
      pinned: false,
    },
  ];

  const filtered = announcements.filter((item) =>
    `${item.title} ${item.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="announcements-page">
      <div className="announcements-header">
        <div>
          <h1>Announcements</h1>
          <p>Stay updated with the latest school announcements.</p>
        </div>

        <div className="announcement-total">
          <Megaphone size={20} />
          {filtered.length} Announcements
        </div>
      </div>

      <div className="announcement-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search announcements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="announcement-list">
        {filtered.map((item, index) => (
          <div
            className={`announcement-card ${
              item.pinned ? "pinned" : ""
            }`}
            key={index}
          >
            <div className="announcement-icon">
              <Megaphone size={24} />
            </div>

            <div className="announcement-content">
              <div className="announcement-title-row">
                <h3>{item.title}</h3>

                {item.pinned && (
                  <span className="pin-badge">
                    <Pin size={14} />
                    Pinned
                  </span>
                )}
              </div>

              <p>{item.category}</p>

              <div className="announcement-details">
                <span>
                  <CalendarDays size={15} />
                  {item.date}
                </span>

                <span>
                  <Clock size={15} />
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="no-results">
            <Search size={45} />
            <h2>No announcements found</h2>
            <p>Try another search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Announcements;