function NavigationButtons({ quizState, handleQuestionNavigation, isNextButtonAnimating, totalQuestions }) {
    return (
      <div className="flex justify-between mt-8">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={quizState.currentIndex === 0}
          onClick={() => handleQuestionNavigation(quizState.currentIndex - 1)}
        >
          Previous
        </button>
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 relative overflow-hidden"
          onClick={() => handleQuestionNavigation(quizState.currentIndex + 1)}
        >
            {quizState.currentIndex === totalQuestions - 1 ? "Submit" : "Next"}
          {isNextButtonAnimating && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(255, 255, 255, 0.3)",
                animation: "decreaseWidth 5s linear forwards",
              }}
            />
          )}
        </button>
      </div>
    );
  }
  
  export default NavigationButtons;