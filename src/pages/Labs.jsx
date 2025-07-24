import React from 'react';
import { FaUserTie, FaBook, FaCalendarAlt, FaDownload, FaMicrochip, FaShieldAlt, FaCloud, FaDatabase, FaNetworkWired } from 'react-icons/fa';

const labsData = [
  {
    name: 'AI & Machine Learning Lab',
    description: 'Equipped with high-performance GPUs and the latest software for developing and testing advanced AI models.',
    inCharge: 'Prof. Shikha Jain',
    image: 'https://www.amity.edu/aiit/AUN-Research-Lab/AILAB/svgs/design.jpg',
    manualLink: '#',
    timetableLink: '#',
    icon: <FaMicrochip className="text-3xl text-blue-500" />,
    stats: [
      { label: 'GPUs', value: '12' },
      { label: 'Workstations', value: '24' },
      { label: 'AI Frameworks', value: '8+' }
    ]
  },
  {
    name: 'Cybersecurity Lab',
    description: 'A dedicated space for ethical hacking, network security analysis, and digital forensics investigations.',
    inCharge: 'Prof. Shalu Sarswat',
    image: 'https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1719394892335.jpg-org',
    manualLink: '#',
    timetableLink: '#',
    icon: <FaShieldAlt className="text-3xl text-green-500" />,
    stats: [
      { label: 'Pen Test Kits', value: '15' },
      { label: 'Forensic Stations', value: '10' },
      { label: 'Security Tools', value: '20+' }
    ]
  },
  {
    name: 'Cloud Computing Lab',
    description: 'Provides hands-on experience with major cloud platforms like AWS, Azure, and Google Cloud.',
    inCharge: 'DR. deepali Hirolikar',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUniwFAPZEa9kcfAy-EWtlUeFLMsxc8jTIdA&s',
    manualLink: '#',
    timetableLink: '#',
    icon: <FaCloud className="text-3xl text-purple-500" />,
    stats: [
      { label: 'Cloud Platforms', value: '5' },
      { label: 'Virtual Machines', value: '50+' },
      { label: 'Containers', value: '100+' }
    ]
  },
  {
    name: 'Data Science Lab',
    description: 'Features tools like Hadoop, Spark, and Tableau for processing and visualizing large datasets.',
    inCharge: 'Prof. Amol Gadewar',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    manualLink: '#',
    timetableLink: '#',
    icon: <FaDatabase className="text-3xl text-red-500" />,
    stats: [
      { label: 'Data Nodes', value: '8' },
      { label: 'Visualization Tools', value: '12' },
      { label: 'Datasets', value: '100+' }
    ]
  },
  {
    name: 'IoT & Embedded Lab',
    description: 'A creative space with sensors, microcontrollers, and development kits for building IoT solutions.',
    inCharge: 'Prof. R. Kawale',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxa8sOiaUwStAQZ38R-FFd4IvCtFlnLX5o9g&s',
    manualLink: '#',
    timetableLink: '#',
    icon: <FaMicrochip className="text-3xl text-yellow-500" />,
    stats: [
      { label: 'Dev Kits', value: '30' },
      { label: 'Sensor Types', value: '25+' },
      { label: 'Prototypes', value: '50+' }
    ]
  },
  {
    name: 'Networking Lab',
    description: 'Contains routers, switches, and other networking hardware from Cisco for practical experiments.',
    inCharge: 'Prof. Nutan Phalake',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH03Io7ojFl0v1VDLpYO6rjerFInSpByXhWA&s',
    manualLink: '#',
    timetableLink: '#',
    icon: <FaNetworkWired className="text-3xl text-indigo-500" />,
    stats: [
      { label: 'Routers', value: '12' },
      { label: 'Switches', value: '18' },
      { label: 'Test Stations', value: '24' }
    ]
  },
];

const Labs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4">
            Our Advanced Laboratories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge facilities designed to bridge theory with practical innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labsData.map((lab, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Lab Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={lab.image} 
                  alt={lab.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Lab Icon Badge */}
                <div className="absolute -bottom-6 right-6 bg-white p-3 rounded-full shadow-md">
                  {lab.icon}
                </div>
              </div>

              {/* Lab Content */}
              <div className="p-6 pt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{lab.name}</h3>
                <p className="text-gray-600 mb-4">{lab.description}</p>
                
                {/* Lab Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {lab.stats.map((stat, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-2 text-center">
                      <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Lab In-charge */}
                <div className="flex items-center mb-6 p-3 bg-gray-50 rounded-lg">
                  <FaUserTie className="text-blue-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Lab In-charge</div>
                    <div className="font-medium text-gray-800">{lab.inCharge}</div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={lab.manualLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaBook />
                    <span>Manual</span>
                    <FaDownload className="ml-auto" />
                  </a>
                  <a 
                    href={lab.timetableLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    <FaCalendarAlt />
                    <span>Schedule</span>
                    <FaDownload className="ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labs;