import { useState } from "react";
import {
  Search,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";
import "./Grades.css";

function Grades() {
  const [search, setSearch] = useState("");

  const students = [
    {
      student_id: "2026-0001",
      name: "Haruki Tanaka",
      course: "Bachelor of Science in IT",
      year_level: "1st Year",
      grades: [
        { subject: "Programming", grade: 91 },
        { subject: "Database", grade: 88 },
        { subject: "Web Development", grade: 93 },
        { subject: "Mathematics", grade: 90 },
      ],
    },
    {
      student_id: "2026-0002",
      name: "Sakura Yamamoto",
      course: "Bachelor of Science in IT",
      year_level: "1st Year",
      grades: [
        { subject: "Programming", grade: 94 },
        { subject: "Database", grade: 92 },
        { subject: "Web Development", grade: 95 },
        { subject: "Mathematics", grade: 91 },
      ],
    },
    {
      student_id: "2026-0003",
      name: "Kaito Nakamura",
      course: "Bachelor of Science in CS",
      year_level: "2nd Year",
      grades: [
        { subject: "Programming", grade: 89 },
        { subject: "Database", grade: 90 },
        { subject: "Web Development", grade: 87 },
        { subject: "Mathematics", grade: 92 },
      ],
    },
    {
      student_id: "2026-0004",
      name: "Aiko Fujimoto",
      course: "Bachelor of Science in CS",
      year_level: "2nd Year",
      grades: [
        { subject: "Programming", grade: 92 },
        { subject: "Database", grade: 89 },
        { subject: "Web Development", grade: 94 },
        { subject: "Mathematics", grade: 90 },
      ],
    },
    {
      student_id: "2026-0005",
      name: "Riku Matsuda",
      course: "Bachelor of Science in IT",
      year_level: "3rd Year",
      grades: [
        { subject: "Programming", grade: 88 },
        { subject: "Database", grade: 91 },
        { subject: "Networking", grade: 93 },
        { subject: "Web Development", grade: 90 },
      ],
    },
  ];

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.student_id} ${student.course} ${student.year_level}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getAverage = (grades) => {
    const total = grades.reduce(
      (sum, item) => sum + item.grade,
      0
    );

    return (total / grades.length).toFixed(2);
  };

  const getGradeStatus = (grade) => {
    if (grade >= 90) return "Excellent";
    if (grade >= 85) return "Very Good";
    if (grade >= 75) return "Passed";
    return "Failed";
  };

  return (
    <div className="grades-page">

      {/* Header */}
      <div className="grades-header">
        <div>
          <h1>Grades</h1>
          <p>View and manage student academic performance.</p>
        </div>

        <div className="grades-total">
          <GraduationCap size={22} />
          <span>
            {filteredStudents.length} Students
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="grades-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search student by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Student Grade Cards */}
      <div className="grades-container">

        {filteredStudents.map((student) => {
          const average = getAverage(student.grades);

          return (
            <div
              className="grade-card"
              key={student.student_id}
            >

              {/* Student Information */}
              <div className="grade-card-header">

                <div className="grade-avatar">
                  {student.name.charAt(0)}
                </div>

                <div className="student-details">
                  <h2>{student.name}</h2>

                  <p>{student.student_id}</p>

                  <span>
                    {student.course} • {student.year_level}
                  </span>
                </div>

                <div className="average-box">
                  <Award size={20} />

                  <strong>{average}</strong>

                  <small>Average</small>
                </div>

              </div>

              {/* Subjects */}
              <div className="subjects-title">
                <BookOpen size={20} />
                <h3>Subject Grades</h3>
              </div>

              <div className="grades-table">

                <div className="grades-table-header">
                  <span>Subject</span>
                  <span>Grade</span>
                  <span>Status</span>
                </div>

                {student.grades.map((item, index) => (
                  <div
                    className="grades-row"
                    key={index}
                  >
                    <span>{item.subject}</span>

                    <strong>{item.grade}</strong>

                    <span
                      className={`grade-status ${
                        item.grade >= 75
                          ? "passed"
                          : "failed"
                      }`}
                    >
                      {getGradeStatus(item.grade)}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          );
        })}

        {filteredStudents.length === 0 && (
          <div className="no-grades">
            <GraduationCap size={45} />

            <h2>No student found</h2>

            <p>
              Try searching using another name or student ID.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Grades;