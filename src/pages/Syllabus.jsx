import React, { useState, useEffect } from 'react';
import { FaBook, FaDownload, FaChevronDown, FaSearch, FaTimes, FaBookOpen, FaUniversity, FaClock } from 'react-icons/fa';

// Mock Data with additional details
const syllabusData = {
  3: {
    semester: 3,
    subjects: [
      { 
        code: 'IT-301', 
        title: 'Data Structures & Algorithms', 
        topics: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & Graphs', 'Sorting & Searching Algorithms'],
        credits: 4,
        hours: 60,
        books: [
          { title: 'Introduction to Algorithms', author: 'Cormen et al.' },
          { title: 'Data Structures and Algorithms Made Easy', author: 'Narasimha Karumanchi' }
        ]
      },
      { 
        code: 'IT-302', 
        title: 'Database Management Systems', 
        topics: ['ER Model', 'SQL & Relational Algebra', 'Normalization', 'Transaction Management'],
        credits: 4,
        hours: 60,
        books: [
          { title: 'Database System Concepts', author: 'Silberschatz, Korth, Sudarshan' },
          { title: 'Fundamentals of Database Systems', author: 'Elmasri & Navathe' }
        ]
      },
      { 
        code: 'MA-301', 
        title: 'Discrete Mathematics', 
        topics: ['Set Theory', 'Logic & Proofs', 'Graph Theory', 'Combinatorics'],
        credits: 3,
        hours: 45,
        books: [
          { title: 'Discrete Mathematics and Its Applications', author: 'Kenneth H. Rosen' }
        ]
      },
    ]
  },
  4: {
    semester: 4,
    subjects: [
      { 
        code: 'IT-401', 
        title: 'Operating Systems', 
        topics: ['Process Management', 'Memory Management', 'File Systems', 'Deadlocks'],
        credits: 4,
        hours: 60,
        books: [
          { title: 'Operating System Concepts', author: 'Silberschatz, Galvin, Gagne' },
          { title: 'Modern Operating Systems', author: 'Andrew S. Tanenbaum' }
        ]
      },
      { 
        code: 'IT-402', 
        title: 'Computer Networks', 
        topics: ['OSI & TCP/IP Models', 'Data Link Layer', 'Network Layer', 'Application Layer'],
        credits: 4,
        hours: 60,
        books: [
          { title: 'Computer Networking: A Top-Down Approach', author: 'Kurose & Ross' }
        ]
      },
      { 
        code: 'IT-403', 
        title: 'Object-Oriented Programming', 
        topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'Exception Handling', 'Design Patterns'],
        credits: 3,
        hours: 45,
        books: [
          { title: 'Head First Design Patterns', author: 'Eric Freeman, Elisabeth Robson' }
        ]
      },
    ]
  },
  5: {
    semester: 5,
    subjects: [
      { 
        code: 'IT-501', 
        title: 'Artificial Intelligence', 
        topics: ['Search Algorithms', 'Knowledge Representation', 'Machine Learning Basics', 'Natural Language Processing'],
        credits: 4,
        hours: 60,
        books: [
          { title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell, Peter Norvig' }
        ]
      },
      { 
        code: 'IT-502', 
        title: 'Software Engineering', 
        topics: ['SDLC Models', 'Requirement Analysis', 'Software Design', 'Testing Methodologies'],
        credits: 3,
        hours: 45,
        books: [
          { title: 'Software Engineering: A Practitioner\'s Approach', author: 'Roger S. Pressman' }
        ]
      },
      { 
        code: 'IT-503', 
        title: 'Theory of Computation', 
        topics: ['Finite Automata', 'Regular Expressions', 'Context-Free Grammars', 'Turing Machines'],
        credits: 3,
        hours: 45,
        books: [
          { title: 'Introduction to the Theory of Computation', author: 'Michael Sipser' }
        ]
      },
    ]
  },
};

const AccordionItem = ({ subject }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
            <h2>
                <button 
                    type="button" 
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="bg-primary text-white p-2 rounded-lg w-16 text-center font-bold">
                            {subject.code}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{subject.title}</h3>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                    <FaUniversity className="text-primary" />
                                    {subject.credits} Credits
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaClock className="text-primary" />
                                    {subject.hours} Hours
                                </span>
                            </div>
                        </div>
                    </div>
                    <FaChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h2>
            {isOpen && (
                <div className="p-5 border-t border-gray-200 bg-white">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="mb-3 text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <FaBookOpen className="text-primary" />
                                Key Topics
                            </h4>
                            <ul className="space-y-2">
                                {subject.topics.map((topic, index) => (
                                    <li key={topic} className="flex items-start">
                                        <span className="inline-block bg-primary text-white rounded-full w-6 h-6 text-center text-sm leading-6 mr-3 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <FaBook className="text-primary" />
                                Recommended Books
                            </h4>
                            <ul className="space-y-3">
                                {subject.books.map((book, index) => (
                                    <li key={book.title} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                        <h5 className="font-medium text-gray-800">{book.title}</h5>
                                        <p className="text-sm text-gray-600">by {book.author}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Syllabus = () => {
    const [activeSemester, setActiveSemester] = useState(3);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // Filter subjects based on search query
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredSubjects(syllabusData[activeSemester].subjects);
        } else {
            const filtered = syllabusData[activeSemester].subjects.filter(subject => 
                subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                subject.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setFilteredSubjects(filtered);
        }
    }, [searchQuery, activeSemester]);

    const handleSemesterChange = (sem) => {
        setActiveSemester(sem);
        setSearchQuery(''); // Reset search when changing semester
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Animated Header */}
            <header className="bg-gradient-to-r from-primary to-blue-600 text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20L0 20z\' fill=\'%23ffffff\' fill-opacity=\'0.2\' /%3E%3C/svg%3E")' }}></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">Syllabus Explorer</h1>
                    <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-100">
                        Discover the comprehensive curriculum for our IT program with detailed subject information.
                    </p>
                    <div className="mt-8 animate-fade-in delay-200">
                        <div className="inline-flex rounded-full bg-white bg-opacity-20 p-1">
                            {Object.keys(syllabusData).map(sem => (
                                <button
                                    key={sem}
                                    onClick={() => handleSemesterChange(Number(sem))}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                                        activeSemester === Number(sem)
                                            ? 'bg-white text-primary shadow-md'
                                            : 'text-white hover:bg-white hover:bg-opacity-10'
                                    }`}
                                >
                                    Semester {sem}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
                {isLoading ? (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div className="animate-pulse flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Search and Download Bar */}
                        <div className="p-6 border-b border-gray-200 bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="relative w-full md:w-auto flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaSearch className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Search subjects or topics..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <button
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setSearchQuery('')}
                                    >
                                        <FaTimes className="text-gray-400 hover:text-gray-600" />
                                    </button>
                                )}
                            </div>
                            <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-primary transition-all shadow-md hover:shadow-lg whitespace-nowrap">
                                <FaDownload />
                                Download Full Syllabus
                            </button>
                        </div>

                        {/* Semester Info */}
                        <div className="p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Semester {activeSemester} Curriculum
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {filteredSubjects.length} {filteredSubjects.length === 1 ? 'subject' : 'subjects'} found
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-0 flex items-center gap-3">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                        {syllabusData[activeSemester].subjects.reduce((sum, sub) => sum + sub.credits, 0)} Total Credits
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                        {syllabusData[activeSemester].subjects.reduce((sum, sub) => sum + sub.hours, 0)} Total Hours
                                    </span>
                                </div>
                            </div>

                            {/* Subjects List */}
                            {filteredSubjects.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredSubjects.map(subject => (
                                        <AccordionItem key={subject.code} subject={subject} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                        <FaSearch className="text-gray-400 text-3xl" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">No subjects found</h3>
                                    <p className="mt-1 text-gray-500">Try adjusting your search query</p>
                                    <button 
                                        onClick={() => setSearchQuery('')}
                                        className="mt-4 px-4 py-2 text-sm text-primary font-medium hover:text-primary-dark"
                                    >
                                        Clear search
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Syllabus;