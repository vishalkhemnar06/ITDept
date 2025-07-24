import React, { useState } from 'react';
import { 
  FaTachometerAlt, FaBullhorn, FaUserTie, FaUserGraduate, 
  FaCalendarAlt, FaProjectDiagram, FaChartBar, FaUsers, 
  FaClipboardList, FaCog, FaSignOutAlt, FaPlus, FaSearch
} from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// --- Sub-Components for each Dashboard Section (defined in the same file) ---

const DashboardOverview = () => {
  const kpiData = [
    { title: 'Total Students', value: '1,250', icon: <FaUserGraduate size={24}/>, color: 'bg-blue-500' },
    { title: 'Total Faculty', value: '45', icon: <FaUserTie size={24}/>, color: 'bg-green-500' },
    { title: 'Projects Pending', value: '12', icon: <FaProjectDiagram size={24}/>, color: 'bg-yellow-500' },
    { title: 'Upcoming Events', value: '3', icon: <FaCalendarDay size={24}/>, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map(kpi => (
          <div key={kpi.title} className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className={`p-4 rounded-full text-white ${kpi.color}`}>
              {kpi.icon}
            </div>
            <div className="ml-4">
              <p className="text-lg text-gray-500">{kpi.title}</p>
              <p className="text-3xl font-bold text-gray-800">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ManagerPage = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <FaPlus /> Add New
            </button>
        </div>
        <div>
            {children || <p className="text-center text-gray-500 py-8">Content for this section is under development.</p>}
        </div>
    </div>
);

// --- The Main HOD Dashboard Component ---

const HodDashboard = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const sidebarLinks = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Manage Notices', icon: <FaBullhorn /> },
    { name: 'Faculty Manager', icon: <FaUserTie /> },
    { name: 'Student Manager', icon: <FaUserGraduate /> },
    { name: 'Event Manager', icon: <FaCalendarAlt /> },
    { name: 'Project Approvals', icon: <FaProjectDiagram /> },
    { name: 'Feedback Review', icon: <FaChartBar /> },
    { name: 'Placement Analytics', icon: <FaChartBar /> },
    { name: 'Alumni Management', icon: <FaUsers /> },
    { name: 'Attendance Tracker', icon: <FaClipboardList /> },
    { name: 'Admin Settings', icon: <FaCog /> },
  ];

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardOverview />;
      case 'Manage Notices':
        return <ManagerPage title="Manage Notices" />;
      case 'Faculty Manager':
        return <ManagerPage title="Faculty Manager" />;
      case 'Student Manager':
        return <ManagerPage title="Student Manager" />;
      case 'Event Manager':
        return <ManagerPage title="Event Manager" />;
      case 'Project Approvals':
        return <ManagerPage title="Project Approvals" />;
      case 'Feedback Review':
        return <ManagerPage title="Feedback Review" />;
      case 'Placement Analytics':
        return <ManagerPage title="Placement Analytics" />;
      case 'Alumni Management':
        return <ManagerPage title="Alumni Management" />;
      case 'Attendance Tracker':
        return <ManagerPage title="Attendance Tracker" />;
      case 'Admin Settings':
        return <ManagerPage title="Admin Settings" />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* --- Sidebar --- */}
      <div className="w-64 bg-gray-800 text-white flex flex-col flex-shrink-0">
        <div className="h-20 flex items-center justify-center p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-center">HOD Dashboard</h1>
        </div>
        <nav className="flex-grow p-2">
          {sidebarLinks.map(link => (
            <button
              key={link.name}
              onClick={() => setActivePage(link.name)}
              className={`w-full flex items-center px-4 py-3 my-1 rounded-md text-sm font-medium transition-colors text-left ${activePage === link.name ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
          <a href="/" className="flex items-center px-4 py-3 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            <FaSignOutAlt className="mr-3" />
            Logout
          </a>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default HodDashboard;