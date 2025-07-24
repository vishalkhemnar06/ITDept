import React, { useState } from 'react';
import { FaUserTie, FaQuoteLeft, FaCalendarCheck, FaLinkedin, FaTwitter, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Alumni = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    email: '',
    company: '',
    message: ''
  });

  // Alumni data organized by decade
  const alumniByDecade = {
    recent: [
      {
        name: 'Sameer Verma',
        batch: '2020',
        position: 'Founder & CEO, InnovateAI',
        photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        linkedin: '#',
        twitter: '#',
        achievement: 'Forbes 30 Under 30 in Technology'
      }
    ],
    '2010s': [
      {
        name: 'Anjali Mehta',
        batch: '2012',
        position: 'Principal Engineer, Amazon Web Services',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        linkedin: '#',
        achievement: 'Led development of AWS Lambda'
      }
    ],
    '2000s': [
      {
        name: 'Vikram Rathod',
        batch: '2005',
        position: 'Senior Cybersecurity Analyst, Google',
        photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        linkedin: '#',
        achievement: 'Google Security Excellence Award 2023'
      }
    ]
  };

  const alumniEvents = [
    {
      title: 'Annual Alumni Homecoming 2025',
      date: 'December 20, 2025',
      description: 'Join us for a day of nostalgia, networking, and fun as we welcome you back to campus. Reconnect with old friends and faculty.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
      type: 'on-campus'
    },
    {
      title: 'Alumni Tech Talk: The Future of Web3',
      date: 'November 5, 2025',
      description: 'An exclusive online session with Sameer Verma (Batch 2010) on the latest trends in Web3 and blockchain technology.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc36b7d5a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
      type: 'virtual'
    }
  ];

  const testimonials = [
    {
      name: 'Anjali Mehta',
      batch: '2012',
      quote: 'The foundation I received here was second to none. The department not only taught me the fundamentals but also how to think like an engineer, which has been crucial in my career at AWS.',
      current: 'Principal Engineer at Amazon Web Services'
    },
    {
      name: 'Vikram Rathod',
      batch: '2005',
      quote: 'The hands-on experience in the cybersecurity lab gave me a significant edge. I am grateful for the mentorship and guidance that prepared me for the challenges in the industry.',
      current: 'Senior Cybersecurity Analyst at Google'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for registering! We will be in touch soon.');
    setFormData({
      name: '',
      batch: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-28 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Network</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Connecting generations of innovators who are shaping the future of technology
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#register" 
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              Join the Network
            </a>
            <a 
              href="#events" 
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-transform transform hover:scale-105"
            >
              View Events
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Notable Alumni Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
                Distinguished Alumni
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our graduates are making waves across industries worldwide
            </p>
          </div>

          {/* Decade Filter Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full shadow-md p-1">
              {['all', 'recent', '2010s', '2000s'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  {tab === 'all' ? 'All Alumni' : 
                   tab === 'recent' ? 'Recent Graduates' : 
                   tab + ' Alumni'}
                </button>
              ))}
            </div>
          </div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'all' 
              ? [...alumniByDecade.recent, ...alumniByDecade['2010s'], ...alumniByDecade['2000s']] 
              : alumniByDecade[activeTab]
            ).map((alumnus, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={alumnus.photo} 
                    alt={alumnus.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{alumnus.name}</h3>
                    <p className="text-blue-200">Batch of {alumnus.batch}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {alumnus.batch}s
                    </span>
                    <div className="flex space-x-2">
                      <a href={alumnus.linkedin} className="text-blue-600 hover:text-blue-800">
                        <FaLinkedin size={18} />
                      </a>
                      {alumnus.twitter && (
                        <a href={alumnus.twitter} className="text-blue-400 hover:text-blue-600">
                          <FaTwitter size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">{alumnus.position}</h4>
                  {alumnus.achievement && (
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-medium">Achievement:</span> {alumnus.achievement}
                    </p>
                  )}
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                  >
                    Read full profile <FiExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration & Events Split Section */}
        <section id="register" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Alumni Registration Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-8 hidden md:flex flex-col justify-center">
                <FaGraduationCap className="text-5xl mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Join 5,000+ Alumni</h3>
                <p className="text-blue-100">
                  Connect with fellow graduates and access exclusive benefits
                </p>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Alumni Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                      <input
                        type="number"
                        id="batch"
                        name="batch"
                        placeholder="e.g., 2015"
                        value={formData.batch}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Current Company & Position</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-transform transform hover:scale-[1.02]"
                    >
                      Join the Network
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Event Invitations */}
          <div id="events" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaCalendarCheck className="text-blue-600" /> Upcoming Events
            </h2>
            {alumniEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold ${
                    event.type === 'on-campus' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {event.type === 'on-campus' ? 'On Campus' : 'Virtual'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                    Learn more <FiExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
                Alumni Voices
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates about their experiences and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden"
              >
                <div className="absolute -top-4 -left-4 text-blue-100 z-0">
                  <FaQuoteLeft size={80} />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <FaUserTie size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">Batch of {testimonial.batch}</p>
                      <p className="text-sm text-blue-600">{testimonial.current}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Impact Stats */}
        <section className="bg-white rounded-2xl shadow-xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Alumni Worldwide</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">Industry Leaders</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Active Network Participation</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Alumni;