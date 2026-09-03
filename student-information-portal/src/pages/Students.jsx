import { useState } from "react";
import {
  Search,
  UserPlus,
  Mail,
  GraduationCap,
} from "lucide-react";


function Students() {
  const [search, setSearch] = useState("");

  const students = [
    {
      student_id: "2026-0001",
      name: "Haruki Tanaka",
      course: "Bachelor of Science in IT",
      year_level: "1st Year",
      email: "haruki.tanaka@email.com",
    },
    {
      student_id: "2026-0002",
      name: "Sakura Yamamoto",
      course: "Bachelor of Science in IT",
      year_level: "1st Year",
      email: "sakura.yamamoto@email.com",
    },
    {
      student_id: "2026-0003",
      name: "Kaito Nakamura",
      course: "Bachelor of Science in CS",
      year_level: "2nd Year",
      email: "kaito.nakamura@email.com",
    },
    {
      student_id: "2026-0004",
      name: "Aiko Fujimoto",
      course: "Bachelor of Science in CS",
      year_level: "2nd Year",
      email: "aiko.fujimoto@email.com",
    },
    {
      student_id: "2026-0005",
      name: "Riku Matsuda",
      course: "Bachelor of Science in IT",
      year_level: "3rd Year",
      email: "riku.matsuda@email.com",
    },
  ];

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.student_id} ${student.course} ${student.year_level}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="students-page">

      {/* Header */}
      <div className="students-header">
        <div>
          <h1>Students</h1>
          <p>Manage and view all student information.</p>
        </div>

        <button className="add-student-btn">
          <UserPlus size={20} />
          Add Student
        </button>
      </div>

      {/* Search */}
      <div className="students-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search student by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Total */}
      <div className="student-count">
        Total Students: <strong>{filteredStudents.length}</strong>
      </div>

      {/* Student Cards */}
      <div className="student-grid">

        {filteredStudents.map((student) => (
          <div
            className="student-card"
            key={student.student_id}
          >
            <div className="student-avatar">
              {student.name.charAt(0)}
            </div>

            <h2>{student.name}</h2>

            <p className="student-id">
              {student.student_id}
            </p>

            <div className="student-info">
              <GraduationCap size={18} />
              <span>{student.course}</span>
            </div>

            <div className="student-year">
              {student.year_level}
            </div>

            <div className="student-info">
              <Mail size={18} />
              <span>{student.email}</span>
            </div>
          </div>
        ))}

        {filteredStudents.length === 0 && (
          <div className="no-students">
            <Search size={45} />
            <h2>No student found</h2>
            <p>Try another name or student ID.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Students;