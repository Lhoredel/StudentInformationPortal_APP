import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Palette,
  Save,
  Mail,
  Moon,
} from "lucide-react";


function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const [name, setName] = useState("Administrator");
  const [email, setEmail] = useState("admin@studentportal.com");

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-page">

      {/* Header */}
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your Student Information Portal settings.</p>
        </div>
      </div>

      {/* Profile */}
      <div className="settings-card">
        <div className="settings-title">
          <User size={22} />
          <div>
            <h2>Profile Information</h2>
            <p>Update your account information.</p>
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-avatar">
            A
          </div>

          <div className="profile-info">
            <label>Full Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email Address</label>

            <div className="input-with-icon">
              <Mail size={18} />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-card">
        <div className="settings-title">
          <Bell size={22} />

          <div>
            <h2>Notifications</h2>
            <p>Control how you receive notifications.</p>
          </div>
        </div>

        <div className="setting-option">
          <div>
            <h3>Email Notifications</h3>
            <p>
              Receive important announcements and updates.
            </p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() =>
                setNotifications(!notifications)
              }
            />

            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Appearance */}
      <div className="settings-card">
        <div className="settings-title">
          <Palette size={22} />

          <div>
            <h2>Appearance</h2>
            <p>Customize how the portal looks.</p>
          </div>
        </div>

        <div className="setting-option">
          <div className="appearance-option">
            <Moon size={20} />

            <div>
              <h3>Dark Mode</h3>
              <p>Use a darker interface.</p>
            </div>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Security */}
      <div className="settings-card">
        <div className="settings-title">
          <Lock size={22} />

          <div>
            <h2>Security</h2>
            <p>Manage your account security.</p>
          </div>
        </div>

        <button className="change-password">
          Change Password
        </button>
      </div>

      {/* Save */}
      <div className="settings-actions">
        <button
          className="save-settings"
          onClick={handleSave}
        >
          <Save size={19} />
          Save Changes
        </button>
      </div>

    </div>
  );
}

export default Settings;