import React, { useState } from 'react';
import { FaUserGraduate, FaUserTie, FaUserShield, FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const roles = [
    { name: 'Student', icon: <FaUserGraduate />, color: 'from-blue-500 to-blue-600' },
    { name: 'Faculty', icon: <FaUserTie />, color: 'from-purple-500 to-purple-600' },
    { name: 'HOD', icon: <FaUserShield />, color: 'from-amber-500 to-amber-600' },
  ];

  const [activeRole, setActiveRole] = useState('Student');
  const [activeTab, setActiveTab] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    department: '',
    enrollmentId: '',
    position: '',
    confirmPassword: '',
    forgotEmail: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSignIn = () => {
    // Immediate redirect based on role
    if (activeRole === 'Student') {
      navigate('/student-dashboard');
    } else if (activeRole === 'Faculty') {
      navigate('/faculty-dashboard');
    } else if (activeRole === 'HOD') {
      navigate('/hod-dashboard');
    }
  };

  const handleRegister = () => {
    // For demo purposes, just redirect after "registering"
    handleSignIn();
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'Login':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email / Username</label>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="space-y-1 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-blue-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setActiveTab('Forgot Password')}
                className="text-sm font-medium text-blue-600 hover:underline transition-colors"
              >
                Forgot Password?
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={handleSignIn}
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01]"
              >
                Sign In as {activeRole}
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                <FaGoogle className="text-red-500 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                <FaGithub className="text-gray-800 mr-2" />
                GitHub
              </button>
            </div>
          </motion.div>
        );
      case 'Register':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            {activeRole === 'Student' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="enrollmentId" className="block text-sm font-medium text-gray-700">Enrollment ID</label>
                  <input
                    type="text"
                    id="enrollmentId"
                    value={formData.enrollmentId}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your enrollment number"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                  <select
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Mechanical">Mechanical</option>
                  </select>
                </div>
              </div>
            )}
            
            {activeRole === 'Faculty' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                  <select
                    id="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select Position</option>
                    <option value="Professor">Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Lecturer">Lecturer</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                  <select
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Mechanical">Mechanical</option>
                  </select>
                </div>
              </div>
            )}
            
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="+91 9876543210"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-10"
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-blue-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="space-y-1 relative">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-10"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-blue-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
              </label>
            </div>
            
            <div>
              <button
                type="button"
                onClick={handleRegister}
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01]"
              >
                Create {activeRole} Account
              </button>
            </div>
          </motion.div>
        );
      case 'Forgot Password':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
            </div>
            <div className="space-y-1">
              <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="forgotEmail"
                value={formData.forgotEmail}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01]"
              >
                Send Reset Link
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setActiveTab('Login')}
                className="text-sm font-medium text-blue-600 hover:underline transition-colors"
              >
                Back to Login
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              {activeTab === 'Login' ? 'Welcome Back!' : activeTab === 'Register' ? 'Create Account' : 'Reset Password'}
            </h2>
            <p className="text-gray-600">
              {activeTab === 'Login' ? 'Please select your role to continue' : 
               activeTab === 'Register' ? 'Join our academic community' : 
               'Get back to your account'}
            </p>
          </div>

          {/* Role Selector */}
          {activeTab !== 'Forgot Password' && (
            <div className="grid grid-cols-3 gap-3 mb-8">
              {roles.map(role => (
                <motion.button
                  key={role.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveRole(role.name)}
                  className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all duration-300 ${activeRole === role.name ? 
                    `border-transparent bg-gradient-to-r ${role.color} text-white shadow-md` : 
                    'border-gray-200 text-gray-500 hover:border-blue-500 hover:text-blue-500 bg-white'}`}
                >
                  <span className="text-3xl">{role.icon}</span>
                  <span className="mt-2 text-sm font-semibold">{role.name}</span>
                </motion.button>
              ))}
            </div>
          )}

          {/* Tab Buttons */}
          {activeTab !== 'Forgot Password' && (
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('Login')}
                className={`flex-1 py-3 text-sm font-medium transition-colors relative ${activeTab === 'Login' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Login
                {activeTab === 'Login' && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('Register')}
                className={`flex-1 py-3 text-sm font-medium transition-colors relative ${activeTab === 'Register' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Register
                {activeTab === 'Register' && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            </div>
          )}

          {/* Form Area */}
          <AnimatePresence mode="wait">
            {renderForm()}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;