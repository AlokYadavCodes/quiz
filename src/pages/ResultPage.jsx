import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ResultPage() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {};
  const [progress, setProgress] = useState(0);
  const navigate= useNavigate();

  // Animate the progress bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((score / totalQuestions) * 100); // Calculate percentage
    }, 100);
    return () => clearTimeout(timer);
  }, [score, totalQuestions]);

  // Circle circumference calculation
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex flex-col items-center justify-center text-white">
      {/* Main Content */}
      <div className="bg-blue-600 bg-opacity-10 p-18 rounded-3xl shadow-2xl text-center ">
        {/* Circular Progress Bar */}
        <svg className="w-40 h-40 mx-auto transform rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Animated Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="white"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>

        {/* Score Display */}
        <h1 className="text-4xl font-bold mt-4">{score} / {totalQuestions}</h1>
        <p className="text-lg text-gray-200 mt-2">
          {score === totalQuestions
            ? "Perfect score!"
            : score > totalQuestions / 2
            ? "Great job!"
            : "Keep practicing!"}
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Retry Quiz
        </button>
      </div>
    </div>
  );
}

export default ResultPage;