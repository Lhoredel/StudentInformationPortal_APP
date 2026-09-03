import { useState } from "react";
import {
  Search,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";

function Courses() {
  const [search, setSearch] = useState("");

  const courses = [
    {
      code: "BSIT",
      name: "Bachelor of Science in Information Technology",
      department: "Information Technology",
      students: 120,
      duration: "4 Years",
    },
    {
      code: "BSCS",
      name: "Bachelor of Science in Computer Science",
      department: "Computer Science",
      students: 95,
      duration: "4 Years",
    },
    {
      code: "BSBA",
      name: "Bachelor of Science in Business Administration",
      department: "Business Administration",
      students: 110,
      duration: "4 Years",
    },
    {
      code: "BSED",
      name: "Bachelor of Secondary Education",
      department: "Education",
      students: 85,
      duration: "4 Years",
    },
    {
      code: "BEED",
      name: "Bachelor of Elementary Education",
      department: "Education",
      students: 75,
      duration: "4 Years",
    },
    {
      code: "BSHM",
      name: "Bachelor of Science in Hospitality Management",
      department: "Hospitality Management",
      students: 90,
      duration: "4 Years",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    `${course.code} ${course.name} ${course.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="courses-page">
      <div className="page-header">
        <div>
          <h1>Courses</h1>
          <p>Manage and view all available courses.</p>
        </div>

        <button className="primary-btn">
          <BookOpen size={20} />
          Add Course
        </button>
      </div>

      <div className="search-box">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search course by name or code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="course-count">
        Total Courses: <strong>{filteredCourses.length}</strong>
      </div>

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.code}>
            <div className="course-top">
              <div className="course-icon">
                <GraduationCap size={25} />
              </div>

              <span className="course-code">
                {course.code}
              </span>
            </div>

            <h2>{course.name}</h2>

            <p className="course-department">
              {course.department}
            </p>

            <div className="course-details">
              <div>
                <Users size={18} />
                <span>{course.students} Students</span>
              </div>

              <div>
                <BookOpen size={18} />
                <span>{course.duration}</span>
              </div>
            </div>

            <button className="view-btn">
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;