import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleStartQuiz = () => {
    // Navigate to the quiz page
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex flex-col justify-center items-center text-white">
      {/* Hero Section */}
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Test your knowledge with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">Testline Quiz</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-200 mb-10">
          Challenge yourself and see how much you know. Trusted by millions of learners worldwide.
        </p>

        {/* Call-to-Action Button */}
        <div className="inline-block bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
          <button
            onClick={handleStartQuiz}
            className="block text-indigo-600 font-semibold py-4 px-8 focus:outline-none"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;