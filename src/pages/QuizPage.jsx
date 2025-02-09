import { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";
import NavigationButtons from "../components/NavigationButtons";
import Loading from "../components/Loading";
import { useQuiz } from "../hooks/useQuiz";

function QuizPage() {
  const { questions, quizState, isNextButtonAnimating, handleOptionSelection, handleQuestionNavigation } = useQuiz();

  if (questions.length === 0) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
      <div className="w-full mx-4 max-w-4xl bg-white rounded-3xl shadow-2xl p-8">
        <ProgressBar
          currentQuestion={quizState.currentIndex + 1}
          totalQuestions={questions.length}
        />
        <Question
          questions={questions}
          quizState={quizState}
          handleOptionSelection={handleOptionSelection}
        />
        <NavigationButtons
          quizState={quizState}
          handleQuestionNavigation={handleQuestionNavigation}
          isNextButtonAnimating={isNextButtonAnimating}
          totalQuestions={questions.length}
        />
      </div>
    </div>
  );
}

export default QuizPage;