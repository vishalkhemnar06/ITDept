import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaBriefcase, FaChartLine, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

// --- Mock Data ---
const placementData = [
  { year: '2022', students_placed: 180, highest_package: 18 },
  { year: '2023', students_placed: 210, highest_package: 22 },
  { year: '2024', students_placed: 240, highest_package: 28 },
  { year: '2025', students_placed: 260, highest_package: 35 },
];

const recruiters = [
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
  { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg' },
];

const testimonials = [
  {
    name: 'Priya Singh',
    company: 'Software Engineer @ Google',
    quote: 'The department\'s focus on practical skills and the excellent placement training were instrumental in my success. The faculty support is unparalleled.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop',
    package: '₹35 LPA',
  },
  {
    name: 'Rohan Sharma',
    company: 'Data Scientist @ Microsoft',
    quote: 'The project-based learning approach helped me build a strong portfolio. The mock interviews conducted by the placement cell were a game-changer!',
    photo: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop',
    package: '₹28 LPA',
  },
  {
    name: 'Ananya Patel',
    company: 'Product Manager @ Amazon',
    quote: 'The industry-aligned curriculum and regular tech talks by professionals gave me a competitive edge during my interviews.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    package: '₹32 LPA',
  },
  {
    name: 'Vikram Joshi',
    company: 'AI Researcher @ NVIDIA',
    quote: 'The research opportunities and guidance from professors helped me publish papers and land my dream job in AI research.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    package: '₹40 LPA',
  },
];

const trainingPrograms = [
  {
    title: "Technical Interview Prep",
    icon: "💻",
    description: "Master DSA, system design, and problem-solving with our expert-led sessions and coding challenges."
  },
  {
    title: "Resume Crafting",
    icon: "📝",
    description: "Learn to create ATS-friendly resumes that highlight your skills and projects effectively."
  },
  {
    title: "Mock Interviews",
    icon: "🎤",
    description: "Simulated interviews with industry professionals and detailed feedback sessions."
  },
  {
    title: "Soft Skills Training",
    icon: "🗣️",
    description: "Develop communication, leadership, and teamwork skills for corporate success."
  },
  {
    title: "Aptitude Training",
    icon: "🧠",
    description: "Comprehensive coverage of quantitative, logical, and verbal ability concepts."
  },
  {
    title: "Corporate Readiness",
    icon: "👔",
    description: "Workshops on business etiquette, email writing, and professional networking."
  }
];

const Placements = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <motion.header 
        className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-32 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Launch Your <span className="text-yellow-300">Dream Career</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Where Talent Meets Opportunity
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Placements
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Key Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Placement Achievements
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-md text-center border-l-4 border-blue-500"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">
                <CountUp end={95} suffix="%+" duration={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Placement Rate</h3>
              <p className="text-gray-600 mt-2">Consistently high placement record over the years</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-md text-center border-l-4 border-purple-500"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl font-bold text-purple-600 mb-2">
                <CountUp end={35} suffix=" LPA" duration={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Highest Package</h3>
              <p className="text-gray-600 mt-2">Achieved by our top performers in 2024</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-md text-center border-l-4 border-yellow-500"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl font-bold text-yellow-600 mb-2">
                <CountUp end={50} suffix="+" duration={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Recruiting Companies</h3>
              <p className="text-gray-600 mt-2">From Fortune 500 to innovative startups</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Year-wise Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-3">
              <FaChartLine className="text-purple-600" /> 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Placement Trends
              </span>
            </span>
          </motion.h2>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-xl border border-gray-100"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={placementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#4b5563' }} 
                  axisLine={{ stroke: '#9ca3af' }}
                />
                <YAxis 
                  yAxisId="left" 
                  orientation="left" 
                  stroke="#3b82f6" 
                  tick={{ fill: '#4b5563' }}
                  axisLine={{ stroke: '#9ca3af' }}
                  label={{ 
                    value: 'Students Placed', 
                    angle: -90, 
                    position: 'insideLeft',
                    fill: '#4b5563'
                  }} 
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  stroke="#f59e0b" 
                  tick={{ fill: '#4b5563' }}
                  axisLine={{ stroke: '#9ca3af' }}
                  label={{ 
                    value: 'Highest Package (LPA)', 
                    angle: -90, 
                    position: 'insideRight',
                    fill: '#4b5563'
                  }} 
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }}
                />
                <Legend />
                <Bar 
                  yAxisId="left" 
                  dataKey="students_placed" 
                  fill="#3b82f6" 
                  name="Students Placed" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={2000}
                />
                <Bar 
                  yAxisId="right" 
                  dataKey="highest_package" 
                  fill="#f59e0b" 
                  name="Highest Package (LPA)" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={2000}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
          
          <div className="mt-8 text-center text-gray-600">
            <p>* Data shows consistent growth in both placement numbers and compensation packages</p>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Esteemed Recruiters
            </span>
          </motion.h2>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>
            
            <div className="py-8 overflow-hidden">
              <div className="w-full inline-flex flex-nowrap">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  {[...recruiters, ...recruiters].map((recruiter, index) => (
                    <li key={index} className="hover:scale-110 transition-transform duration-300">
                      <img 
                        src={recruiter.logo} 
                        alt={recruiter.name} 
                        className="h-12 opacity-80 hover:opacity-100 transition-opacity" 
                        title={recruiter.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placement Training Programs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaBriefcase className="text-purple-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Training Programs
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                    Learn more <span className="ml-1">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View Full Training Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>
          
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="relative h-96">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 p-8 flex flex-col md:flex-row items-center ${index === currentTestimonial ? 'z-10' : 'z-0'}`}
                    initial={{ opacity: 0, x: index > currentTestimonial ? 100 : -100 }}
                    animate={{ 
                      opacity: index === currentTestimonial ? 1 : 0,
                      x: index === currentTestimonial ? 0 : (index > currentTestimonial ? 100 : -100)
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="relative">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name} 
                          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
                        />
                        <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-full text-sm shadow-md">
                          {testimonial.package}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <FaQuoteLeft className="text-4xl text-purple-200 mb-4" />
                      <p className="text-lg italic text-gray-700 mb-6">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold text-xl text-gray-900">{testimonial.name}</p>
                        <p className="text-purple-600">{testimonial.company}</p>
                        <div className="flex mt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar key={star} className="text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-20"
              >
                <FaChevronLeft className="text-purple-600" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-20"
              >
                <FaChevronRight className="text-purple-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Launch Your Career?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our network of successful alumni and let us help you achieve your professional dreams.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mr-4">
              Contact Placement Cell
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              View Placement Brochure
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Placements;