function ProgressBar({ currentQuestion, totalQuestions }) {
    return (
      <div className="mb-6">
        <p className="text-center text-gray-700 font-medium">
          Question {currentQuestion} of {totalQuestions}
        </p>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
          <div
            style={{
              width: `${(currentQuestion / totalQuestions) * 100}%`,
            }}
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
          ></div>
        </div>
      </div>
    );
  }
  
  export default ProgressBar;