import { useState } from "react";
import {
  Search,
  CalendarCheck,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";


function Attendance() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "2026-0001",
      name: "Haruki Tanaka",
      course: "Bachelor of Science in IT",
      year: "1st Year",
      present: 18,
      late: 2,
      absent: 1,
    },
    {
      id: "2026-0002",
      name: "Sakura Yamamoto",
      course: "Bachelor of Science in IT",
      year: "1st Year",
      present: 20,
      late: 1,
      absent: 0,
    },
    {
      id: "2026-0003",
      name: "Kaito Nakamura",
      course: "Bachelor of Science in CS",
      year: "2nd Year",
      present: 17,
      late: 2,
      absent: 2,
    },
    {
      id: "2026-0004",
      name: "Aiko Fujimoto",
      course: "Bachelor of Science in CS",
      year: "2nd Year",
      present: 19,
      late: 1,
      absent: 1,
    },
    {
      id: "2026-0005",
      name: "Riku Matsuda",
      course: "Bachelor of Science in IT",
      year: "3rd Year",
      present: 18,
      late: 1,
      absent: 2,
    },
  ];

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.id} ${student.course} ${student.year}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getAttendanceRate = (student) => {
    const total =
      student.present + student.late + student.absent;

    return ((student.present / total) * 100).toFixed(1);
  };

  return (
    <div className="attendance-page">

      {/* Header */}
      <div className="attendance-header">
        <div>
          <h1>Attendance</h1>
          <p>
            Monitor student attendance and attendance records.
          </p>
        </div>

        <div className="attendance-total">
          <CalendarCheck size={22} />
          <span>{filteredStudents.length} Students</span>
        </div>
      </div>

      {/* Search */}
      <div className="attendance-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search student by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Summary */}
      <div className="attendance-summary">

        <div className="summary-card present-card">
          <CheckCircle size={25} />
          <div>
            <span>Present</span>
            <strong>92</strong>
          </div>
        </div>

        <div className="summary-card late-card">
          <Clock size={25} />
          <div>
            <span>Late</span>
            <strong>7</strong>
          </div>
        </div>

        <div className="summary-card absent-card">
          <XCircle size={25} />
          <div>
            <span>Absent</span>
            <strong>6</strong>
          </div>
        </div>

      </div>

      {/* Student Attendance */}
      <div className="attendance-list">

        {filteredStudents.map((student) => (
          <div
            className="attendance-card"
            key={student.id}
          >

            {/* Student */}
            <div className="attendance-student">

              <div className="attendance-avatar">
                {student.name.charAt(0)}
              </div>

              <div>
                <h2>{student.name}</h2>
                <p>{student.id}</p>
                <span>
                  {student.course} • {student.year}
                </span>
              </div>

            </div>

            {/* Records */}
            <div className="attendance-records">

              <div className="record present">
                <CheckCircle size={20} />
                <span>Present</span>
                <strong>{student.present}</strong>
              </div>

              <div className="record late">
                <Clock size={20} />
                <span>Late</span>
                <strong>{student.late}</strong>
              </div>

              <div className="record absent">
                <XCircle size={20} />
                <span>Absent</span>
                <strong>{student.absent}</strong>
              </div>

            </div>

            {/* Rate */}
            <div className="attendance-rate">
              <span>Attendance Rate</span>
              <strong>{getAttendanceRate(student)}%</strong>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${getAttendanceRate(student)}%`,
                  }}
                ></div>
              </div>
            </div>

          </div>
        ))}

        {filteredStudents.length === 0 && (
          <div className="no-attendance">
            <CalendarCheck size={45} />
            <h2>No student found</h2>
            <p>Try another name or student ID.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Attendance;