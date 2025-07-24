import React from 'react';
import { FaLinkedin, FaGraduationCap, FaEnvelope, FaPhone } from 'react-icons/fa';

// Using optimized, smaller images from Unsplash with specific dimensions
const facultyData = [
  { 
    name: 'Prof. Shikha Jain', 
    designation: 'Professor', 
    area: 'Artificial Intelligence, Machine Learning', 
    photo: '#', 
    linkedin: '#', 
    scholar: '#',
    bio: '15+ years experience in AI research. Published 50+ papers in top conferences.',
    email: 'jane.doe@university.edu',
    phone: '+1 (555) 123-4567'
  },
  { 
    name: 'prof. Priyanka Kaurav', 
    designation: 'Professor', 
    area: 'Cybersecurity, Blockchain', 
    photo: '#', 
    linkedin: '#', 
    scholar: '#',
    bio: 'Cybersecurity expert with 12 years industry experience. Consults for Fortune 500 companies.',
    email: 'john.smith@university.edu',
    phone: '+1 (555) 234-5678'
  },
  { 
    name: 'Prof. Nutan Phalake', 
    designation: 'Associate Professor', 
    area: 'Cloud Computing, Distributed Systems', 
    photo: '#', 
    linkedin: '#', 
    scholar: '#',
    bio: 'Specialist in cloud-native architectures with patents in distributed computing.',
    email: 'priya.sharma@university.edu',
    phone: '+1 (555) 345-6789'
  },
];

const Faculty = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
            Meet Our Faculty
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Distinguished educators shaping future innovators
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((member, index) => (
            <div key={index} className="group relative h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Faculty Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Basic Info (Always Visible) */}
              <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-blue-200">{member.designation}</p>
                <div className="mt-2 flex space-x-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {member.area.split(',')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Detailed Info Card (Appears on Hover) */}
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.designation}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">About</h4>
                    <p className="text-gray-700 mt-2">{member.bio}</p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Expertise</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.area.split(',').map((area, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {area.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex space-x-4">
                    <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a href={member.scholar} className="text-blue-600 hover:text-blue-800 transition-colors">
                      <FaGraduationCap className="h-6 w-6" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                      <FaEnvelope className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <FaPhone className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaEnvelope className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="truncate">{member.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;