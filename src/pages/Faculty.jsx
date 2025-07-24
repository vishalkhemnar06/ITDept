import React from 'react';
import { FaLinkedin, FaGraduationCap, FaEnvelope, FaPhone, FaUserCircle } from 'react-icons/fa';

// Using a generic placeholder for missing photos
const facultyData = [
  { 
    name: 'Prof. Shikha Jain', 
    designation: 'Professor', 
    area: 'Artificial Intelligence, Machine Learning', 
    photo: '#', // Will use a placeholder
    linkedin: '#', 
    scholar: '#',
    bio: '15+ years of experience in AI research, with over 50 publications in top-tier conferences and journals.',
    email: 'shikha.jain@university.edu',
    phone: '+91 98765 43210'
  },
  { 
    name: 'Prof. Priyanka Kaurav', 
    designation: 'Professor', 
    area: 'Cybersecurity, Blockchain', 
    photo: 'https://codelite.tech/img/profpriyanka.png', 
    linkedin: '#', 
    scholar: '#',
    bio: 'Cybersecurity expert with 12 years of industry experience. Consults for Fortune 500 companies.',
    email: 'priyanka.kaurav@university.edu',
    phone: '+91 98765 43211'
  },
  { 
    name: 'Prof. Nutan Phalake', 
    designation: 'Associate Professor', 
    area: 'Cloud Computing, Distributed Systems', 
    photo: '#', // Will use a placeholder
    linkedin: '#', 
    scholar: '#',
    bio: 'A specialist in cloud-native architectures with multiple patents in distributed computing systems.',
    email: 'nutan.phalake@university.edu',
    phone: '+91 98765 43212'
  },
  {
  name: 'Prof. Shalu Saraswat',
  designation: 'Assistant Professor',
  area: 'Web Development, Frontend Technologies',
  photo: '#', // Placeholder
  linkedin: '#',
  scholar: '#',
  bio: 'Passionate about UI/UX and modern web frameworks, with several contributions to open-source frontend tools.',
  email: 'shalu.saraswat@university.edu',
  phone: '+91 98765 43213'
},
{
  name: 'Prof. R. M. Kawale',
  designation: 'Assistant Professor',
  area: 'Machine Learning, Data Science',
  photo: '#', // Placeholder
  linkedin: '#',
  scholar: '#',
  bio: 'Researcher in predictive analytics with a focus on real-world ML deployment and big data handling.',
  email: 'rm.kawale@university.edu',
  phone: '+91 98765 43214'
},
{
  name: 'Prof. Amol Gadewar',
  designation: 'Assistant Professor',
  area: 'Cyber Security, Network Protocols',
  photo: '#', // Placeholder
  linkedin: '#',
  scholar: '#',
  bio: 'Specialist in ethical hacking and secure network design, with experience in cyber threat detection systems.',
  email: 'amol.gadewar@university.edu',
  phone: '+91 98765 43215'
},
{
  name: 'Dr. Deepali Hirolikar',
  designation: 'Professor & Head of Department',
  area: 'Artificial Intelligence, Software Engineering',
  photo: 'https://codelite.tech/img/HODITDP.png', // Placeholder
  linkedin: '#',
  scholar: '#',
  bio: 'Veteran academician and HOD with extensive work in AI applications, mentoring research projects across domains.',
  email: 'deepali.hirolikar@university.edu',
  phone: '+91 98765 43216'
},
];

// Fallback image URL for faculty members without a photo
const PLACEHOLDER_IMAGE = 'https://i.pravatar.cc/300?u=';

const FacultyCard = ({ member }) => {
  const photoSrc = member.photo === '#' ? `${PLACEHOLDER_IMAGE}${member.name}` : member.photo;

  return (
    // Card container with 3D perspective
    <div className="group h-[450px] w-full [perspective:1000px]">
      {/* Inner container for the flip animation */}
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front of the Card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="h-full w-full rounded-xl bg-gradient-to-br from-gray-800 to-slate-900 flex flex-col items-center justify-center p-6 text-center">
            <img
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg"
              src={photoSrc}
              alt={member.name}
              loading="lazy"
            />
            <h3 className="mt-6 text-2xl font-bold text-white">{member.name}</h3>
            <p className="mt-1 text-lg text-blue-300">{member.designation}</p>
            <div className="mt-4 px-4 py-1 rounded-full bg-slate-700 text-sm text-slate-200">
              {member.area.split(',')[0].trim()}
            </div>
          </div>
        </div>

        {/* Back of the Card */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-white p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold">{member.designation}</p>
              
              <p className="text-gray-600 mt-4 text-sm">{member.bio}</p>

              <div className="mt-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase">Expertise</h4>
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
              <div className="flex justify-center space-x-5 my-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-all duration-300 hover:scale-110">
                  <FaLinkedin className="h-7 w-7" />
                </a>
                <a href={member.scholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-all duration-300 hover:scale-110">
                  <FaGraduationCap className="h-7 w-7" />
                </a>
                <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-blue-700 transition-all duration-300 hover:scale-110">
                  <FaEnvelope className="h-7 w-7" />
                </a>
              </div>
              <div className="border-t border-gray-200 pt-3 text-sm space-y-2">
                <div className="flex items-center text-gray-700">
                  <FaPhone className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaEnvelope className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                  <span className="truncate">{member.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Faculty = () => {
  return (
    <div className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-800">
            Meet Our Esteemed Faculty
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Leading minds in technology, dedicated to fostering innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facultyData.map((member) => (
            <FacultyCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;