import React, { useState, useEffect, useRef } from 'react';
import { 
  FaAward, 
  FaUniversity, 
  FaUsers, 
  FaFlask, 
  FaQuoteLeft, 
  FaChevronLeft, 
  FaChevronRight,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaMicroscope,
  FaLaptopCode
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom hook for animating numbers counting up
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endValue = parseInt(end.toString().replace(/,/g, ''));
          if (start === endValue) return;

          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (endValue - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const StatCard = ({ icon, value, label, description }) => {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-xl border border-white/50 backdrop-blur-sm"
    >
      <div className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl mb-4 inline-block">
        {icon}
      </div>
      <p className="text-5xl font-extrabold text-gradient bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}+
      </p>
      <p className="text-xl font-semibold text-gray-800 mb-2">{label}</p>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, quote, avatar }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col"
    >
      <div className="flex items-center mb-6">
        <img 
          src={avatar} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 mr-4"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-blue-600">{role}</p>
        </div>
      </div>
      <div className="relative flex-grow">
        <FaQuoteLeft className="text-blue-200 text-3xl absolute -top-2 -left-2" />
        <p className="text-gray-700 italic pl-6">"{quote}"</p>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: 'from-blue-100 to-blue-50 text-blue-800',
    purple: 'from-purple-100 to-purple-50 text-purple-800',
    amber: 'from-amber-100 to-amber-50 text-amber-800',
    teal: 'from-teal-100 to-teal-50 text-teal-800'
  };

  const iconColors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    amber: 'text-amber-600',
    teal: 'text-teal-600'
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-gradient-to-br ${colorClasses[color]} p-6 rounded-xl shadow-md border border-white/50 flex flex-col h-full`}
    >
      <div className={`w-14 h-14 rounded-xl ${iconColors[color]} bg-white flex items-center justify-center mb-4 shadow-sm`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const stats = [
    { 
      icon: <FaUsers />, 
      value: 1250, 
      label: 'Students Enrolled', 
      description: 'Across our undergraduate and postgraduate programs' 
    },
    { 
      icon: <FaUniversity />, 
      value: 20, 
      label: 'Years of Excellence', 
      description: 'Providing quality IT education since 2003' 
    },
    { 
      icon: <FaFlask />, 
      value: 15, 
      label: 'Advanced Labs', 
      description: 'Including AI, Cybersecurity, and IoT labs' 
    },
    { 
      icon: <FaAward />, 
      value: 50, 
      label: 'Awards Won', 
      description: 'For academic excellence and innovation' 
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524179091875-b494986c6e0b?q=80&w=2070&auto=format&fit=crop',
  ];

  const milestones = [
    { year: '2003', title: 'Department Established', description: 'Founded with a vision to provide quality IT education' },
    { year: '2008', title: 'First Accreditation', description: 'Received national accreditation for our programs' },
    { year: '2012', title: 'Research Center Opened', description: 'Established our AI and Data Science research center' },
    { year: '2018', title: 'Industry Partnership', description: 'Formed strategic partnerships with leading tech companies' },
    { year: '2022', title: 'New Campus', description: 'Moved to state-of-the-art facilities in the tech park' },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Industry Partner, Tech Innovations Inc.',
      quote: 'The quality of graduates from this department is exceptional. Their practical skills and problem-solving abilities make them stand out in the industry.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop'
    },
    {
      name: 'Raj Patel',
      role: 'Alumni, Class of 2018',
      quote: 'The department provided me with not just technical knowledge but also the confidence to innovate. The faculty mentorship was invaluable to my career growth.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Current Student',
      quote: 'The hands-on learning approach and access to cutting-edge technology labs have given me practical experience that complements classroom learning perfectly.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const features = [
    {
      icon: <FaGraduationCap />,
      title: 'Industry-Aligned Curriculum',
      description: 'Our programs are designed in collaboration with tech leaders to ensure relevance to current industry needs.',
      color: 'blue'
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Expert Faculty',
      description: 'Learn from professors with both academic excellence and real-world industry experience.',
      color: 'purple'
    },
    {
      icon: <FaMicroscope />,
      title: 'Research Opportunities',
      description: 'Undergraduate research programs with funding and mentorship for innovative projects.',
      color: 'amber'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Tech Incubation',
      description: 'Dedicated startup incubator to support student entrepreneurship and innovation.',
      color: 'teal'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Header */}
      <header className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r   z-10"></div>
        <img 
          src="https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/309892508_158208170226303_4571565160162502723_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=M4NxD645tjoQ7kNvwGV5T45&_nc_oc=AdkMDXscJTIAqO9VSwfiiexFPAvP0C13EQLRIx13lqIFfgFOE2RvlXz3TH6gd3hwyo8&_nc_zt=23&_nc_ht=scontent.fpnq7-2.fna&_nc_gid=JdKSWqGJZXF812kZ8vt-wg&oh=00_AfT4-9J8A7UZC-9QGVqchtXnY3qnlc982cwUTOisTlFCgw&oe=6887DCBA" 
          alt="Department building"
          className="w-full h-full object-cover object-center"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Shaping the <span className="text-gradient bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">Digital Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8"
          >
            Pioneering IT education through innovation, excellence, and a commitment to shaping future technology leaders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Explore Programs
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-full font-semibold transition-all transform hover:scale-105">
              Virtual Tour
            </button>
          </motion.div>
        </div>
        
        {/* Scrolling indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </header>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Guiding Principles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-2xl p-8 shadow-lg border border-white/50 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center mr-4 shadow-sm">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a globally recognized center of excellence in Information Technology education and research, producing innovative, ethical, and socially responsible professionals who drive technological advancement and digital transformation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl p-8 shadow-lg border border-white/50 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-100 to-amber-200 flex items-center justify-center mr-4 shadow-sm">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide a transformative learning environment that fosters innovation, critical thinking, and ethical leadership. Through cutting-edge curriculum, industry collaborations, and research opportunities, we empower students to solve complex problems and create impactful technological solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOD Message */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-b from-blue-900 to-purple-900 p-8 flex flex-col items-center justify-center text-center">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://codelite.tech/img/HODITDP.png" 
                  alt="DR. Deepali Hirolikar, HOD"
                  className="w-48 h-48 rounded-full object-cover border-4 border-amber-400 shadow-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-white mb-1">Dr. Deepali Hirolikar </h3>
                <p className="text-blue-200 mb-4">Head of Department</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-amber-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-amber-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-amber-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <FaQuoteLeft className="text-amber-400 text-3xl mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">A Message from Our HOD</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Welcome to the Department of Information Technology at Pune Institute. As we navigate the rapidly evolving landscape of technology, our department stands at the forefront of innovation and education.
                  </p>
                  <p>
                    We pride ourselves on creating a vibrant learning atmosphere where students are encouraged to think critically, innovate fearlessly, and grow into well-rounded professionals. Our dedicated faculty, state-of-the-art facilities, and strong industry connections provide the perfect ecosystem for our students to thrive.
                  </p>
                  <p>
                    What sets us apart is our commitment to not just teaching technology, but to building the architects of the digital future. Our curriculum is designed to bridge the gap between academia and industry, ensuring our graduates are ready to tackle real-world challenges from day one.
                  </p>
                  <p>
                    I invite you to explore our programs, meet our faculty, and discover how we can help you achieve your aspirations in the exciting world of information technology.
                  </p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center"
                >
                  Meet Our Faculty
                  <FiExternalLink className="ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Department Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our department's history of excellence and innovation
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`p-6 rounded-2xl shadow-lg ${index % 2 === 0 ? 'bg-blue-50' : 'bg-purple-50'} relative`}>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 ${index % 2 === 0 ? '-right-2' : '-left-2'} bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white`}></div>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white">
                      {milestone.year}
                    </div>
                  </div>
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our vibrant campus and state-of-the-art facilities
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={galleryImages[0]} 
              alt="Campus gallery" 
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our State-of-the-Art Campus</h3>
                <p className="text-blue-100">Modern facilities designed for innovation and collaboration</p>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(1, 4).map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-md group"
              >
                <img 
                  src={src} 
                  alt={`Campus image ${index + 1}`} 
                  className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center mx-auto">
              View Full Gallery
              <FiExternalLink className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Whether you're a prospective student, researcher, or industry partner, we'd love to connect with you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;