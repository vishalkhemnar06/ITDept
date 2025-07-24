import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTicketAlt, FaCamera, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Event Data
const upcomingEvents = [
  {
    title: 'Innovate-a-Thon 2025: AI for Good',
    date: 'August 15, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    description: 'A 24-hour hackathon challenging students to build AI-powered solutions for social and environmental problems. Prizes worth ₹1,00,000 to be won!',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    tags: ['Hackathon', 'AI', 'Prize Money'],
    seats: 'Limited seats available',
    registerLink: '#'
  },
  {
    title: 'Guest Lecture: The Future of Cybersecurity',
    date: 'September 5, 2025',
    time: '3:00 PM - 4:30 PM',
    location: 'Seminar Hall C',
    description: 'Join us for an insightful session with Mr. Ramesh Gupta, Chief Security Officer at CyberSafe Inc., as he discusses emerging threats and career paths in cybersecurity.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    tags: ['Lecture', 'Cybersecurity', 'Career'],
    seats: 'Open to all students',
    registerLink: '#'
  },
];

const pastEvents = [
  { 
    title: 'CodeSprint 2024', 
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    date: 'March 2024',
    stats: '150+ participants'
  },
  { 
    title: 'Alumni Meet & Greet', 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    date: 'January 2024',
    stats: '35 alumni speakers'
  },
  { 
    title: 'Project Expo 2024', 
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    date: 'November 2024',
    stats: '75 projects showcased'
  },
  { 
    title: 'Workshop on IoT', 
    image: 'https://images.unsplash.com/photo-1581092918056-0c7c73334620?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    date: 'October 2024',
    stats: '2-day hands-on workshop'
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentEvent, setCurrentEvent] = useState(0);

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev === upcomingEvents.length - 1 ? 0 : prev + 1));
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev === 0 ? upcomingEvents.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Events & Workshops</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in delay-100">
            Where innovation meets opportunity
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in delay-200">
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-full font-medium ${activeTab === 'upcoming' ? 'bg-white text-blue-600' : 'bg-white/20 hover:bg-white/30'}`}
            >
              Upcoming Events
            </button>
            <button 
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-full font-medium ${activeTab === 'past' ? 'bg-white text-blue-600' : 'bg-white/20 hover:bg-white/30'}`}
            >
              Past Events
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'upcoming' ? (
          <>
            {/* Upcoming Events Carousel */}
            <section className="mb-20">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-96 md:h-[500px]">
                  <img 
                    src={upcomingEvents[currentEvent].image} 
                    alt={upcomingEvents[currentEvent].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {upcomingEvents[currentEvent].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{upcomingEvents[currentEvent].title}</h2>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-blue-100 mb-6">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt /> {upcomingEvents[currentEvent].date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock /> {upcomingEvents[currentEvent].time}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {upcomingEvents[currentEvent].location}
                      </span>
                    </div>
                    <p className="max-w-2xl text-lg mb-6">{upcomingEvents[currentEvent].description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="text-amber-300 font-medium">{upcomingEvents[currentEvent].seats}</span>
                      <a 
                        href={upcomingEvents[currentEvent].registerLink}
                        className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                      >
                        <FaTicketAlt /> Register Now
                      </a>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevEvent}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full text-white transition-all"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextEvent}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full text-white transition-all"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              {/* Event Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {upcomingEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEvent(index)}
                    className={`w-3 h-3 rounded-full ${currentEvent === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </section>

            {/* All Upcoming Events Grid */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">More Upcoming Events</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    onClick={() => setCurrentEvent(index)}
                  >
                    <div className="relative h-48">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-blue-100">{event.date}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{event.seats}</span>
                        <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                          View details <FiExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Past Events Gallery */
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Past Event Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="relative group rounded-xl shadow-md overflow-hidden cursor-pointer h-64"
                >
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">{event.title}</h3>
                      <p className="text-sm text-blue-100">{event.date}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <div className="text-center text-white">
                      <FaCamera size={24} className="mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                      <p className="text-sm text-blue-100 mb-2">{event.date}</p>
                      <p className="text-sm">{event.stats}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Event Registration CTA */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-6 max-w-md">
                Subscribe to our newsletter and never miss an important event or workshop announcement.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-blue-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="People at event" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;