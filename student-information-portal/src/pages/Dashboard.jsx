import {
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  ArrowRight,
  Megaphone,
  Clock,
  MapPin
} from "lucide-react";

function Dashboard() {
  const students = [
    {
      id: "2026-0001",
      name: "Haruki Tanaka",
      course: "Bachelor of Science in IT",
      year: "1st Year",
      avatar: "👨🏻‍🎓"
    },
    {
      id: "2026-0002",
      name: "Sakura Yamamoto",
      course: "Bachelor of Science in IT",
      year: "1st Year",
      avatar: "👩🏻‍🎓"
    },
    {
      id: "2026-0003",
      name: "Kaito Nakamura",
      course: "Bachelor of Science in CS",
      year: "2nd Year",
      avatar: "👨🏻‍💻"
    },
    {
      id: "2026-0004",
      name: "Aiko Fujimoto",
      course: "Bachelor of Science in CS",
      year: "2nd Year",
      avatar: "👩🏻‍💻"
    },
    {
      id: "2026-0005",
      name: "Riku Matsuda",
      course: "Bachelor of Science in IT",
      year: "3rd Year",
      avatar: "👨🏻‍🎓"
    }
  ];

  const events = [
    {
      month: "MAY",
      day: "10",
      title: "Midterm Examination",
      time: "8:00 AM - 12:00 PM",
      location: "Main Building"
    },
    {
      month: "MAY",
      day: "15",
      title: "Project Submission",
      time: "11:59 PM",
      location: "Online Submission"
    },
    {
      month: "MAY",
      day: "20",
      title: "Parent-Teacher Meeting",
      time: "1:00 PM - 4:00 PM",
      location: "Conference Room"
    },
    {
      month: "MAY",
      day: "25",
      title: "Sports Festival",
      time: "7:00 AM - 5:00 PM",
      location: "School Grounds"
    }
  ];

  const stats = [
    {
      icon: <Users size={30} />,
      number: "256",
      label: "Total Students",
      className: "blue-icon"
    },
    {
      icon: <GraduationCap size={30} />,
      number: "12",
      label: "Total Courses",
      className: "green-icon"
    },
    {
      icon: <BookOpen size={30} />,
      number: "48",
      label: "Total Subjects",
      className: "pink-icon"
    },
    {
      icon: <CalendarCheck size={30} />,
      number: "92%",
      label: "Attendance Rate",
      className: "orange-icon"
    }
  ];

  return (
    <div className="dashboard">

      {/* STATISTICS */}
      <section className="stats-grid">
        {stats.map((stat) => (
          <div className="glass-card stat-card" key={stat.label}>
            <div className={`stat-icon ${stat.className}`}>
              {stat.icon}
            </div>

            <h2>{stat.number}</h2>
            <p>{stat.label}</p>

            <button className="view-button">
              View all <ArrowRight size={17} />
            </button>
          </div>
        ))}
      </section>

      {/* STUDENTS AND EVENTS */}
      <section className="dashboard-grid">

        <div className="glass-card panel">
          <div className="panel-header">
            <h2>Recent Students</h2>
            <button>View all</button>
          </div>

          <div className="student-list">
            {students.map((student) => (
              <div className="student-row" key={student.id}>
                <div className="student-avatar">
                  {student.avatar}
                </div>

                <div className="student-info">
                  <h3>{student.name}</h3>
                  <span>{student.id}</span>
                </div>

                <p className="course">
                  {student.course}
                </p>

                <span className="year-badge">
                  {student.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card panel">
          <div className="panel-header">
            <h2>Upcoming Events</h2>
            <button>View calendar</button>
          </div>

          <div className="event-list">
            {events.map((event) => (
              <div className="event-row" key={event.day}>
                <div className="date-box">
                  <span>{event.month}</span>
                  <strong>{event.day}</strong>
                </div>

                <div className="event-info">
                  <h3>{event.title}</h3>

                  <div className="event-details">
                    <span>
                      <Clock size={14} />
                      {event.time}
                    </span>

                    <span>
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ANNOUNCEMENT */}
      <section className="glass-card announcement">
        <div className="announcement-icon">
          <Megaphone size={30} />
        </div>

        <div>
          <h3>Announcement</h3>
          <p>
            Please remember to submit your requirements on time. Thank you! 🌸
          </p>
        </div>

        <span className="announcement-date">
          May 5, 2026
        </span>
      </section>

    </div>
  );
}

export default Dashboard;