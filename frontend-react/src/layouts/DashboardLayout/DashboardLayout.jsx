import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Navigation/Sidebar';
import './DashboardLayout.css';

export default function DashboardLayout({ children, onSearch }) {
  return (
    <div className="dashboard-layout">
      <Navbar onSearch={onSearch} />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
}
