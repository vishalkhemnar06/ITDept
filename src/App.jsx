import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Labs from './pages/Labs';
import Events from './pages/Events';
import Placements from './pages/Placements';
import AlumniPage from './pages/AlumniPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Courses from './pages/Courses';
import Syllabus from './pages/Syllabus';
import AcademicCalendar from './pages/AcademicCalendar';


function App() {
  return (
    <Router>
      {/* Navbar */}
      
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<><Navbar/><Home /></>} />
        <Route path="/about" element={<><Navbar/><About /></>} />
        <Route path="/faculty" element={<><Navbar/><Faculty /></>} />
        <Route path="/students" element={<><Navbar/><Students /></>} />
        <Route path="/labs" element={<><Navbar/><Labs /></>} />
        <Route path="/events" element={<><Navbar/><Events /></>} />
        <Route path="/placements" element={<><Navbar/><Placements /></>} />
        <Route path="alumni" element={<><Navbar/><AlumniPage /></>} />
        <Route path="contact" element={<><Navbar/><ContactPage /></>} />
        <Route path="login" element={<><Navbar/><Login /></>} />

        <Route path="courses" element={<><Navbar/><Courses /></>} />
        <Route path="syllabus" element={<><Navbar/><Syllabus /></>} />
        <Route path="calendar" element={<><Navbar/><AcademicCalendar /></>} />
      
    
  

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center px-4">
              <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
              <p className="mt-4 text-gray-600 text-center">
                The page you are looking for doesn't exist.
              </p>
              <Link
                to="/"
                className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition duration-200"
              >
                Go to Home
              </Link>
            </div>
          }
        />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 mt-8">
        <p className="text-gray-600">© 2025 IT Department. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
