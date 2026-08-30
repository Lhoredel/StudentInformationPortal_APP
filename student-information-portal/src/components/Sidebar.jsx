import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardEdit,
  CalendarCheck,
  CalendarDays,
  Megaphone,
  Settings,
  GraduationCap,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <GraduationCap size={45} />
        <span>
          Student<br />
          Portal
        </span>
      </div>

      <nav className="menu">
        <NavLink to="/" end className="menu-item">
          <LayoutDashboard size={24} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/students" className="menu-item">
          <Users size={24} />
          <span>Students</span>
        </NavLink>

        <NavLink to="/courses" className="menu-item">
          <BookOpen size={24} />
          <span>Courses</span>
        </NavLink>

        <NavLink to="/grades" className="menu-item">
          <ClipboardEdit size={24} />
          <span>Grades</span>
        </NavLink>

        <NavLink to="/attendance" className="menu-item">
          <CalendarCheck size={24} />
          <span>Attendance</span>
        </NavLink>

        <NavLink to="/calendar" className="menu-item">
          <CalendarDays size={24} />
          <span>Calendar</span>
        </NavLink>

        <NavLink to="/announcements" className="menu-item">
          <Megaphone size={24} />
          <span>Announcements</span>
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <Settings size={24} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;