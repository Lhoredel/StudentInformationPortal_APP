import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-section">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Dashboard />} />
            <Route path="/grades" element={<Dashboard />} />
            <Route path="/attendance" element={<Dashboard />} />
            <Route path="/calendar" element={<Dashboard />} />
            <Route path="/announcements" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;