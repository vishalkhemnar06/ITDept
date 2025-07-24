import React, { useState } from 'react';
import { FaCalendar, FaFlagCheckered, FaGraduationCap, FaBookReader, FaTree, FaSearch, FaFilter, FaChevronDown } from 'react-icons/fa';

// Mock Data with additional details
const calendarEvents = [
  { 
    id: 1,
    date: 'August 1, 2025', 
    event: 'Commencement of Semester III & V', 
    type: 'academic',
    description: 'First day of classes for Semester III and V students. Attendance is mandatory.',
    important: true
  },
  { 
    id: 2,
    date: 'August 15, 2025', 
    event: 'Independence Day', 
    type: 'holiday',
    description: 'College closed for Independence Day celebrations.',
    important: false
  },
  { 
    id: 3,
    date: 'September 10 - 15, 2025', 
    event: 'Mid-Term Examinations', 
    type: 'exam',
    description: 'Mid-term exams for all courses. Check your department for specific schedules.',
    important: true
  },
  { 
    id: 4,
    date: 'October 2, 2025', 
    event: 'Gandhi Jayanti', 
    type: 'holiday',
    description: 'College closed to commemorate Mahatma Gandhi\'s birthday.',
    important: false
  },
  { 
    id: 5,
    date: 'October 20 - 24, 2025', 
    event: 'Diwali Vacation', 
    type: 'holiday',
    description: 'College closed for Diwali celebrations. Classes resume on October 25.',
    important: false
  },
  { 
    id: 6,
    date: 'November 1, 2025', 
    event: 'Last Day for Course Withdrawal', 
    type: 'academic',
    description: 'Final date to withdraw from courses without academic penalty.',
    important: true
  },
  { 
    id: 7,
    date: 'November 25 - December 5, 2025', 
    event: 'End-Term Examinations', 
    type: 'exam',
    description: 'Final examinations for all courses. Detailed schedule will be published one month prior.',
    important: true
  },
  { 
    id: 8,
    date: 'December 15, 2025', 
    event: 'End of Semester', 
    type: 'academic',
    description: 'Official end of semester. Grade submission deadline for faculty.',
    important: false
  },
  { 
    id: 9,
    date: 'December 25, 2025', 
    event: 'Christmas Day', 
    type: 'holiday',
    description: 'College closed for Christmas celebrations.',
    important: false
  },
  { 
    id: 10,
    date: 'January 10, 2026', 
    event: 'Commencement of Semester IV & VI', 
    type: 'academic',
    description: 'First day of classes for Semester IV and VI students.',
    important: true
  },
];

const getIconForType = (type) => {
  switch (type) {
    case 'academic':
      return <FaGraduationCap className="text-blue-500" />;
    case 'exam':
      return <FaBookReader className="text-red-500" />;
    case 'holiday':
      return <FaTree className="text-green-500" />;
    default:
      return <FaCalendar className="text-gray-500" />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case 'academic':
      return 'bg-blue-100 text-blue-800';
    case 'exam':
      return 'bg-red-100 text-red-800';
    case 'holiday':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const AcademicCalendar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedEvent, setExpandedEvent] = useState(null);

  const filteredEvents = calendarEvents.filter(event => {
    const matchesSearch = event.event.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || event.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const toggleEvent = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Header with animated gradient */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20L0 20z\' fill=\'%23ffffff\' fill-opacity=\'0.2\' /%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">Academic Calendar</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-100">
            Key dates and deadlines for the academic year 2025-26
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Filters and Search */}
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setSearchTerm('')}
                  >
                    <FaTimes className="text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                >
                  <option value="all">All Events</option>
                  <option value="academic">Academic</option>
                  <option value="exam">Examinations</option>
                  <option value="holiday">Holidays</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaChevronDown className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          <div className="p-6">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FaSearch className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No events found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="relative">
                {/* Vertical timeline */}
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5"></div>
                
                {/* Events */}
                <div className="space-y-8">
                  {filteredEvents.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`relative ${index % 2 === 0 ? 'md:pr-8 md:mr-1/2' : 'md:pl-8 md:ml-1/2'}`}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute top-6 w-4 h-4 rounded-full ${item.important ? 'ring-4 ring-opacity-30' : ''} ${
                        item.type === 'academic' ? 'bg-blue-500 ring-blue-200' :
                        item.type === 'exam' ? 'bg-red-500 ring-red-200' :
                        'bg-green-500 ring-green-200'
                      } ${index % 2 === 0 ? 'left-6 md:left-1/2 md:-ml-2' : 'left-6 md:right-1/2 md:-mr-2'}`}></div>
                      
                      {/* Event card */}
                      <div 
                        className={`bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer ${
                          index % 2 === 0 ? 'ml-12 md:ml-0 md:mr-6' : 'ml-12 md:ml-6'
                        }`}
                        onClick={() => toggleEvent(item.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold text-gray-800">{item.event}</h3>
                              {item.important && (
                                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                                  Important
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(item.type)}`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        </div>
                        
                        {expandedEvent === item.id && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {/* End marker */}
                  <div className="relative md:pr-8 md:mr-1/2">
                    <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-gray-500 md:left-1/2 md:-ml-2"></div>
                    <div className="ml-12 md:ml-0 md:mr-6 p-5">
                      <div className="flex items-center gap-3">
                        <FaFlagCheckered className="text-gray-500 text-xl" />
                        <h3 className="text-lg font-bold text-gray-500">End of Academic Year</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Legend */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Academic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-600">Examinations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">Holidays</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 ring-2 ring-yellow-200"></div>
                <span className="text-sm text-gray-600">Important</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;