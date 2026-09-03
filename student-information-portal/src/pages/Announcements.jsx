import { useState } from "react";
import {
  Search,
  Megaphone,
  CalendarDays,
  Clock,
  Pin,
} from "lucide-react";
import "./Announcements.css";

function Announcements() {
  const [search, setSearch] = useState("");

  const announcements = [
    {
      id: 1,
      title: "Enrollment for 2nd Semester",
      message:
        "Enrollment for the 2nd semester is now open. Students are encouraged to complete their enrollment before the deadline.",
      date: "September 1, 2026",
      time: "8:00 AM",
      category: "Academic",
      pinned: true,
    },
    {
      id: 2,
      title: "Midterm Examination Schedule",
      message:
        "The midterm examination schedule has been released. Please check your subjects and examination dates.",
      date: "September 5, 2026",
      time: "10:00 AM",
      category: "Examination",
      pinned: true,
    },
    {
      id: 3,
      title: "Student Orientation Program",
      message:
        "All new students are invited to attend the Student Orientation Program. Attendance is highly encouraged.",
      date: "September 10, 2026",
      time: "9:00 AM",
      category: "Event",
      pinned: false,
    },
    {
      id: 4,
      title: "Library Schedule Update",
      message:
        "The library will be open from 7:00 AM to 8:00 PM on weekdays starting this semester.",
      date: "September 12, 2026",
      time: "7:00 AM",
      category: "General",
      pinned: false,
    },
    {
      id: 5,
      title: "Campus Clean-Up Drive",
      message:
        "Students are invited to participate in the campus clean-up drive. Volunteers may register at the student affairs office.",
      date: "September 15, 2026",
      time: "8:00 AM",
      category: "Activity",
      pinned: false,
    },
  ];

  const filteredAnnouncements = announcements.filter((announcement) =>
    `${announcement.title} ${announcement.message} ${announcement.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="announcements-page">

      {/* Header */}
      <div className="announcements-header">
        <div>
          <h1>Announcements</h1>
          <p>
            Stay updated with the latest school announcements.
          </p>
        </div>

        <div className="announcement-total">
          <Megaphone size={22} />
          <span>{announcements.length} Announcements</span>
        </div>
      </div>

      {/* Search */}
      <div className="announcement-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search announcements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Announcement List */}
      <div className="announcement-list">

        {filteredAnnouncements.map((announcement) => (
          <div
            className={`announcement-card ${
              announcement.pinned ? "pinned" : ""
            }`}
            key={announcement.id}
          >

            {/* Icon */}
            <div className="announcement-icon">
              <Megaphone size={25} />
            </div>

            {/* Content */}
            <div className="announcement-content">

              <div className="announcement-title">
                <div>
                  <h2>{announcement.title}</h2>

                  {announcement.pinned && (
                    <span className="pinned-label">
                      <Pin size={13} />
                      Pinned
                    </span>
                  )}
                </div>

                <span className="category">
                  {announcement.category}
                </span>
              </div>

              <p>{announcement.message}</p>

              {/* Date and Time */}
              <div className="announcement-meta">

                <span>
                  <CalendarDays size={16} />
                  {announcement.date}
                </span>

                <span>
                  <Clock size={16} />
                  {announcement.time}
                </span>

              </div>

            </div>

          </div>
        ))}

        {filteredAnnouncements.length === 0 && (
          <div className="no-announcements">
            <Megaphone size={45} />

            <h2>No announcements found</h2>

            <p>
              Try searching using another keyword.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Announcements;