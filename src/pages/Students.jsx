import React, { useState, useMemo, useEffect } from 'react';
import { 
  FaBullhorn, FaBook, FaCalendarAlt, FaTrophy, 
  FaUsers, FaDownload, FaSearch, FaChevronDown, 
  FaChevronUp, FaExternalLinkAlt, FaRegBell 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Mock Data (In a real app, this would come from an API) ---
const notices = [
  { id: 1, title: 'Mid-Term Examination Schedule (SEM IV & VI)', date: '2025-07-22', link: '#', priority: 'high' },
  { id: 2, title: 'Guest Lecture on "The Future of AI" by Dr. Smith', date: '2025-07-20', link: '#', priority: 'medium' },
  { id: 3, title: 'Results for SEM III & V Declared', date: '2025-07-18', link: '#', priority: 'high' },
  { id: 4, title: 'Library will remain closed on 25th July', date: '2025-07-15', link: '#', priority: 'low' },
  { id: 5, title: 'Campus recruitment drive by TechCorp on 30th July', date: '2025-07-10', link: '#', priority: 'medium' },
];

const achievements = [
  { id: 1, name: 'Rohan Sharma', achievement: 'Won 1st Place at "Innovate-a-Thon 2025"', category: 'Hackathon', year: '2025', image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, name: 'Priya Singh', achievement: 'Secured University Gold Medal (SEM V)', category: 'Academics', year: '2024', image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'Aarav Gupta', achievement: 'Published a research paper in IEEE Access', category: 'Research', year: '2025', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, name: 'Anika Reddy', achievement: 'Captain of the winning Inter-College Cricket Team', category: 'Sports', year: '2024', image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, name: 'Vikram Kumar', achievement: 'Best Project Award for "Smart Irrigation System"', category: 'Academics', year: '2025', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, name: 'Sneha Desai', achievement: 'Finalist at National Coding Olympiad', category: 'Hackathon', year: '2024', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop' },
];

const councilMembers = [
  { name: 'Aditya Verma', role: 'President', photo: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop', social: { linkedin: '#', email: '#' } },
  { name: 'Meera Iyer', role: 'Vice President', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop', social: { linkedin: '#', email: '#' } },
  { name: 'Karan Singh', role: 'Secretary', photo: 'https://images.unsplash.com/photo-1632910121591-21227f85d4b0?q=80&w=1887&auto=format&fit=crop', social: { linkedin: '#', email: '#' } },
  { name: 'Neha Patel', role: 'Treasurer', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1887&auto=format&fit=crop', social: { linkedin: '#', email: '#' } },
  { name: 'Rahul Joshi', role: 'Event Coordinator', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop', social: { linkedin: '#', email: '#' } },
];

const semesters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

const resources = [
  { title: 'Academic Calendar 2025', type: 'PDF', size: '2.4 MB', link: '#' },
  { title: 'Semester VI Syllabus', type: 'PDF', size: '1.8 MB', link: '#' },
  { title: 'Lab Manual - DBMS', type: 'DOC', size: '3.2 MB', link: '#' },
  { title: 'Previous Year Papers', type: 'ZIP', size: '4.5 MB', link: '#' },
];

const upcomingEvents = [
  { title: 'Tech Symposium 2025', date: '2025-08-15', location: 'Auditorium' },
  { title: 'Career Counseling Session', date: '2025-08-05', location: 'Room 302' },
  { title: 'Inter-College Sports Meet', date: '2025-08-20', location: 'Sports Complex' },
];

const Students = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedNotice, setExpandedNotice] = useState(null);
  const [showCouncil, setShowCouncil] = useState(false);
  const [newNotifications, setNewNotifications] = useState(3);

  const filteredAchievements = useMemo(() => {
    let filtered = activeFilter === 'All' 
      ? achievements 
      : achievements.filter(a => a.category === activeFilter);
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.achievement.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeFilter, searchTerm]);

  const filteredNotices = useMemo(() => {
    return searchTerm 
      ? notices.filter(notice => 
          notice.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : notices;
  }, [searchTerm]);

  const achievementCategories = ['All', 'Academics', 'Hackathon', 'Research', 'Sports'];

  const priorityColors = {
    high: 'bg-red-100 border-red-500',
    medium: 'bg-amber-100 border-amber-500',
    low: 'bg-blue-100 border-blue-500'
  };

  useEffect(() => {
    // Simulate new notifications
    const timer = setInterval(() => {
      setNewNotifications(prev => Math.min(prev + 1, 5));
    }, 30000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header with animated gradient */}
      <header className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Student Hub
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Your gateway to academic resources, achievements, and campus life
          </motion.p>
          
          {/* Quick stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl font-bold">24+</div>
              <div className="text-sm">Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Achievements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm">Clubs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm">Events Monthly</div>
            </div>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Notices and Resources */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search notices, achievements..."
                className="w-full p-4 pl-12 rounded-xl shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </motion.div>

            {/* Notice Board */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <FaBullhorn className="text-indigo-600" /> 
                  Notice Board
                  {newNotifications > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {newNotifications}
                    </span>
                  )}
                </h2>
                <button 
                  className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800"
                  onClick={() => setNewNotifications(0)}
                >
                  <FaRegBell /> Mark all as read
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map(notice => (
                    <motion.div 
                      key={notice.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border-l-4 p-4 rounded-r-lg transition-all cursor-pointer 
                        ${priorityColors[notice.priority]} 
                        ${expandedNotice === notice.id ? 'shadow-lg' : 'hover:shadow-md'}`}
                      onClick={() => setExpandedNotice(expandedNotice === notice.id ? null : notice.id)}
                    >
                      <div className="flex justify-between items-start">
                        <p className="font-semibold text-gray-800">{notice.title}</p>
                        {expandedNotice === notice.id ? (
                          <FaChevronUp className="text-gray-500 mt-1" />
                        ) : (
                          <FaChevronDown className="text-gray-500 mt-1" />
                        )}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-gray-500">Posted: {notice.date}</p>
                        <a 
                          href={notice.link} 
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Read More <FaExternalLinkAlt size={12} />
                        </a>
                      </div>
                      
                      <AnimatePresence>
                        {expandedNotice === notice.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-200"
                          >
                            <p className="text-gray-600">
                              {notice.priority === 'high' && (
                                <span className="font-bold text-red-500">IMPORTANT: </span>
                              )}
                              This notice contains critical information about upcoming events. 
                              Please ensure you review all details carefully and mark your calendars accordingly.
                            </p>
                            <div className="mt-3 flex gap-3">
                              <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                                Add to Calendar
                              </button>
                              <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300">
                                Share
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No notices found matching your search.
                  </div>
                )}
              </div>
            </motion.section>

            {/* Achievements Wall */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaTrophy className="text-amber-500" /> 
                Achievements Wall
              </h2>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-wrap gap-2 mb-6">
                  {achievementCategories.map(category => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all 
                        ${activeFilter === category 
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredAchievements.length > 0 ? (
                    filteredAchievements.map(item => (
                      <motion.div
                        key={item.id}
                        whileHover={{ y: -5 }}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-40">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4">
                            <p className="font-bold text-white text-lg">{item.name}</p>
                            <p className="text-amber-300 text-sm">{item.category}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-700">{item.achievement}</p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                              {item.year}
                            </span>
                            <button className="text-xs font-semibold text-indigo-600 hover:underline">
                              View Details
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8 text-gray-500">
                      No achievements found matching your criteria.
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column: Quick Access */}
          <div className="space-y-8">
            {/* Quick Links Card */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <span>Student Portal</span>
                    <FaExternalLinkAlt />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <span>Library Resources</span>
                    <FaExternalLinkAlt />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <span>Course Registration</span>
                    <FaExternalLinkAlt />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <span>Campus Map</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.section>

            {/* Syllabus & Resources */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaBook className="text-purple-600" /> 
                Academic Resources
              </h2>
              
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Syllabus (By Semester)</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {semesters.map(sem => (
                      <motion.a
                        key={sem}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="text-center p-2 bg-gray-100 rounded-md text-sm text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        Sem {sem}
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-gray-700 mb-3">Recent Resources</h3>
                  <div className="space-y-2">
                    {resources.map((resource, index) => (
                      <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                        <div>
                          <p className="font-medium text-gray-800">{resource.title}</p>
                          <p className="text-xs text-gray-500">{resource.type} • {resource.size}</p>
                        </div>
                        <a 
                          href={resource.link} 
                          className="text-indigo-600 hover:text-indigo-800"
                          title="Download"
                        >
                          <FaDownload />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Upcoming Events */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaCalendarAlt className="text-red-500" /> 
                Upcoming Events
              </h2>
              
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-red-100 text-red-600 rounded-lg p-2 text-center min-w-12">
                      <div className="font-bold text-lg">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs uppercase">
                        {new Date(event.date).toLocaleString('default', { month: 'short' })}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </div>
                ))}
                <a href="#" className="block text-center mt-4 text-indigo-600 hover:underline font-medium">
                  View All Events
                </a>
              </div>
            </motion.section>

            {/* Student Council */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <FaUsers className="text-blue-600" /> 
                  Student Council
                </h2>
                <button 
                  onClick={() => setShowCouncil(!showCouncil)}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  {showCouncil ? 'Show Less' : 'Show All'}
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                {councilMembers.slice(0, showCouncil ? councilMembers.length : 3).map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg"
                  >
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-blue-800">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-gray-800">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;