import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you! Reach out with questions or feedback.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Google Maps and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-xl h-96">
           <iframe
  title="Campus Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1047073655886!2d73.98020217465216!3d18.524169869065386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c258af5922cf%3A0xde3b91beb5003629!2sPune%20District%20Education%20Association's%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1753345214422!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Our Address</h3>
                    <p className="text-gray-600">Information Technology Department<br />
                    PDEA's College of Engineering<br />
                    Pune, Maharasthra 412307</p>
                    <a 
                      href="https://maps.app.goo.gl/XmMscMNfXHcuwfWQ7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2"
                    >
                      View on map <FiExternalLink className="ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      Main Office: <a href="tel:+911126566000" className="text-blue-600 hover:text-blue-800">+91 11 2656 6000</a><br />
                      Department: <a href="tel:+911126596123" className="text-blue-600 hover:text-blue-800">+91 11 2659 6123</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      General: <a href="mailto:csdept@iitd.ac.in" className="text-blue-600 hover:text-blue-800">pdeait@gmail.com</a><br />
                      Admissions: <a href="mailto:admissions@iitd.ac.in" className="text-blue-600 hover:text-blue-800">pdeacoem@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday-Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Visiting Campus?</h3>
              <p className="text-gray-600">
                Please check our visitor policy and schedule an appointment before visiting. All visitors must register at the main gate security desk.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 hidden md:block">
              <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
              <p className="mb-6 text-blue-100">
                Have questions about our programs, research, or facilities? Fill out the form and our team will get back to you within 48 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="mr-3 text-blue-200" />
                  <span>Emergency: +91 11 2659 1111</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-3 text-blue-200" />
                  <span>pdeacoem@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-10">
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-bold text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-blue-600 text-2xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Response Time</h3>
            <p className="text-gray-600">
              We typically respond to inquiries within 1-2 business days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Mailing Address</h3>
            <p className="text-gray-600">
              Department of Computer Science<br />
              IIT Delhi, Hauz Khas<br />
              New Delhi 110016
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-blue-600 text-2xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Quick Contact</h3>
            <p className="text-gray-600">
              For urgent matters:<br />
              <a href="tel:+911126591111" className="text-blue-600 hover:text-blue-800">+91 11 2659 1111</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;