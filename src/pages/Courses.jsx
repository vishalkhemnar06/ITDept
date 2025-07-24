import React, { useState } from 'react';
import { FaBookOpen, FaSearch, FaChevronDown, FaChevronUp, FaRegCalendarAlt, FaCreditCard, FaLayerGroup } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const coursesData = [
  { 
    code: 'IT-301', 
    title: 'Data Structures & Algorithms', 
    credits: 4, 
    semester: 3, 
    description: 'An in-depth study of fundamental data structures and algorithmic techniques.',
    syllabus: ['Arrays & Linked Lists', 'Trees & Graphs', 'Sorting Algorithms', 'Complexity Analysis'],
    faculty: ['Dr. Smith', 'Prof. Johnson']
  },
  { 
    code: 'IT-302', 
    title: 'Database Management Systems', 
    credits: 4, 
    semester: 3, 
    description: 'Covers database design, SQL, and transaction management.',
    syllabus: ['Relational Model', 'SQL Programming', 'Database Design', 'Transaction Management'],
    faculty: ['Dr. Williams']
  },
  { 
    code: 'IT-401', 
    title: 'Operating Systems', 
    credits: 3, 
    semester: 4, 
    description: 'Explores the core concepts of modern operating systems.',
    syllabus: ['Process Management', 'Memory Management', 'File Systems', 'Synchronization'],
    faculty: ['Prof. Brown', 'Dr. Davis']
  },
  { 
    code: 'IT-402', 
    title: 'Computer Networks', 
    credits: 4, 
    semester: 4, 
    description: 'Principles and protocols of computer networking.',
    syllabus: ['Network Layers', 'TCP/IP', 'Routing Algorithms', 'Network Security'],
    faculty: ['Dr. Miller']
  },
  { 
    code: 'IT-501', 
    title: 'Artificial Intelligence', 
    credits: 3, 
    semester: 5, 
    description: 'Introduction to AI, covering search and machine learning.',
    syllabus: ['Search Algorithms', 'Knowledge Representation', 'Neural Networks', 'Natural Language Processing'],
    faculty: ['Prof. Wilson']
  },
  { 
    code: 'IT-502', 
    title: 'Software Engineering', 
    credits: 4, 
    semester: 5, 
    description: 'Methodologies for large-scale software development.',
    syllabus: ['Agile Development', 'Software Design', 'Testing', 'Project Management'],
    faculty: ['Dr. Moore', 'Prof. Taylor']
  },
  { 
    code: 'IT-601', 
    title: 'Cloud Computing', 
    credits: 3, 
    semester: 6, 
    description: 'Fundamentals of cloud technologies and services.',
    syllabus: ['Virtualization', 'Cloud Storage', 'AWS/Azure', 'Serverless Architecture'],
    faculty: ['Prof. Anderson']
  },
  { 
    code: 'IT-602', 
    title: 'Cybersecurity Fundamentals', 
    credits: 3, 
    semester: 6, 
    description: 'Overview of cybersecurity principles and threats.',
    syllabus: ['Cryptography', 'Network Security', 'Ethical Hacking', 'Risk Management'],
    faculty: ['Dr. Thomas']
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [filterSemester, setFilterSemester] = useState('All');
  const [filterCredits, setFilterCredits] = useState('All');

  const toggleCourse = (code) => {
    setExpandedCourse(expandedCourse === code ? null : code);
  };

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = filterSemester === 'All' || course.semester.toString() === filterSemester;
    const matchesCredits = filterCredits === 'All' || course.credits.toString() === filterCredits;
    
    return matchesSearch && matchesSemester && matchesCredits;
  });

  const semesters = [...new Set(coursesData.map(course => course.semester))].sort();
  const credits = [...new Set(coursesData.map(course => course.credits))].sort();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-blue-800 to-purple-900 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Our <span className="text-gradient bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">Academic Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100"
          >
            A comprehensive curriculum designed to build technical expertise and foster innovation in information technology.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
        >
          {/* Header and Filters */}
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600">
                  <FaBookOpen size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Course Catalog</h2>
              </div>
              
              <div className="relative w-full md:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <FaLayerGroup className="text-gray-500" />
                <select 
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filterSemester}
                  onChange={(e) => setFilterSemester(e.target.value)}
                >
                  <option value="All">All Semesters</option>
                  {semesters.map(sem => (
                    <option key={sem} value={sem}>Semester {sem}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <FaCreditCard className="text-gray-500" />
                <select 
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filterCredits}
                  onChange={(e) => setFilterCredits(e.target.value)}
                >
                  <option value="All">All Credits</option>
                  {credits.map(credit => (
                    <option key={credit} value={credit}>{credit} Credits</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Courses List */}
          <div className="divide-y divide-gray-200">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course.code} className="hover:bg-gray-50 transition-colors">
                  <div 
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    onClick={() => toggleCourse(course.code)}
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:block p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600">
                          <FaBookOpen size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-blue-700">{course.code}</span>
                            <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                          </div>
                          <p className="text-gray-600 mt-1">{course.description}</p>
                          <div className="flex flex-wrap gap-4 mt-3">
                            <span className="flex items-center gap-2 text-sm text-gray-500">
                              <FaRegCalendarAlt /> Semester {course.semester}
                            </span>
                            <span className="flex items-center gap-2 text-sm text-gray-500">
                              <FaCreditCard /> {course.credits} Credits
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        {expandedCourse === course.code ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedCourse === course.code && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-bold text-gray-800 mb-3">Course Syllabus</h4>
                              <ul className="space-y-2">
                                {course.syllabus.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-3">Faculty</h4>
                              <div className="flex flex-wrap gap-3">
                                {course.faculty.map((professor, index) => (
                                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                    {professor}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">No courses found matching your criteria</p>
                <button 
                  className="mt-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
                  onClick={() => {
                    setSearchTerm('');
                    setFilterSemester('All');
                    setFilterCredits('All');
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;