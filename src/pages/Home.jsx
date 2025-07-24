import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for announcements and events
const announcements = [
  { id: 1, title: "Campus Recruitment Drive", date: "2023-11-15", category: "Placements" },
  { id: 2, title: "Seminar on AI Ethics", date: "2023-11-20", category: "Events" },
  { id: 3, title: "Mid-Term Exam Schedule", date: "2023-11-25", category: "Academics" },
];

const upcomingEvents = [
  { id: 1, title: "Hackathon 2025", date: "Comming soon..", location: "IT Lab" },
  { id: 2, title: "Guest Lecture: Cloud Computing", date: "2025-12-12", location: "Auditorium" },
  { id: 3, title: "Project Exhibition", date: "2025-12-18", location: "IT Department" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  ];

  const filteredAnnouncements = announcements.filter(announcement =>
    announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    announcement.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Banner with Image Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
          </div>
        ))}
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
              Department of Information Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 mb-8 max-w-3xl">
            Pioneering Innovation Through Technology and Research
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 font-semibold rounded-full shadow-lg transform transition-all hover:scale-105 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-amber-500/30"
            >
              Apply Now
            </Link>
            <Link 
              to="/events" 
              className="px-8 py-3 font-semibold rounded-full shadow-lg transform transition-all hover:scale-105 bg-white text-blue-900 hover:shadow-white/30"
            >
              Explore Programs
            </Link>
          </div>
        </div>
        
        {/* Slider indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-amber-400 w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. About Summary with Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shaping the Future of Technology
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Established in 2005, our department has grown to become a center of excellence in IT education, 
              recognized for our innovative curriculum, cutting-edge research, and strong industry connections.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-5xl font-bold text-blue-900 mb-2">18+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="text-5xl font-bold text-amber-900 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="text-5xl font-bold text-purple-900 mb-2">25+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50">
              <div className="text-5xl font-bold text-green-900 mb-2">1200+</div>
              <div className="text-gray-600">Alumni Network</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
            <blockquote className="text-xl md:text-2xl italic mb-6">
              "Our mission is to empower students with both technical expertise and ethical values, preparing them to solve real-world challenges through technology."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-2xl font-bold">DH</div>
              </div>
              <div>
                <p className="font-bold">Dr. Deepali Hirolikar</p>
                <p className="text-blue-200">Head of Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Department?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students in a discussion" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Industry-Aligned Curriculum</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our programs are designed in collaboration with industry leaders to ensure graduates have the most relevant skills.
                </p>
                <Link 
                  to="/programs" 
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Explore Programs
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  src="https://thumbs.dreamstime.com/b/state-art-quality-control-lab-pharmaceuticals-precision-high-tech-assurance-step-future-pharmaceutical-315102961.jpg" 
                  alt="Researcher working in a lab" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">State-of-the-Art Labs</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Access to advanced computing labs, AI research center, and innovation hubs for hands-on learning.
                </p>
                <Link 
                  to="/facilities" 
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  View Facilities
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Chart showing growth" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Exceptional Outcomes</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our graduates consistently achieve top ranks, high salaries, and leadership positions in tech companies worldwide.
                </p>
                <Link 
                  to="/achievements" 
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  See Success Stories
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Announcements and Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Announcements */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Latest Announcements</h3>
                <Link to="/announcements" className="text-blue-600 hover:underline">View All</Link>
              </div>
              
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search announcements..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredAnnouncements.map((item) => (
                  <div key={item.id} className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 mt-1">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
                <Link to="/events" className="text-blue-600 hover:underline">View All</Link>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-center">
                        <div className="text-blue-800 font-bold text-lg">
                          {new Date(event.date).toLocaleString('default', { day: 'numeric' })}
                        </div>
                        <div className="text-blue-600 text-xs uppercase">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{event.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {event.location}
                        </div>
                        <button className="mt-2 text-sm text-blue-600 hover:underline flex items-center">
                          More Details
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quick Links and Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Access</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              to="/notices" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
              Notices
            </Link>
            <Link 
              to="/timetable" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Time Table
            </Link>
            <Link 
              to="/results" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Results
            </Link>
            <Link 
              to="/faculty" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Faculty Directory
            </Link>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-200 mb-6">
              Subscribe to our newsletter for the latest news, events, and announcements from the Department of IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg text-gray-900 flex-grow max-w-md"
              />
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;