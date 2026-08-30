import { Search, ChevronDown } from "lucide-react";

function Header() {
  return (
    <header className="top-header">
      <div className="welcome-text">
        <h1>Good morning, Admin! 🌸</h1>
        <p>Welcome back to the Student Information Portal</p>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search size={20} />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="admin-profile">
          <div className="avatar">👨🏻‍🎓</div>

          <div>
            <h3>Admin</h3>
            <span>Administrator</span>
          </div>

          <ChevronDown size={20} />
        </div>
      </div>
    </header>
  );
}

export default Header;