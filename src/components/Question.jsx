import AnswerFeedback from "./AnswerFeedback";

function Question({ questions, quizState, handleOptionSelection }) {
    const optionLabels = ["A", "B", "C", "D"];

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800">
                {questions[quizState.currentIndex].description}
            </h2>
            <div className="mt-6 space-y-4">
                {questions[quizState.currentIndex].options.map(
                    (option, index) => (
                        <button
                            key={option.id}
                            disabled={
                                quizState.selectedOptions[
                                    quizState.currentIndex
                                ]
                            }
                            onClick={() =>
                                handleOptionSelection(
                                    option.id,
                                    option.is_correct
                                )
                            }
                            className={`w-full py-3 px-4 rounded-lg text-left ${
                                quizState.selectedOptions[
                                    quizState.currentIndex
                                ] === option.id
                                    ? option.is_correct
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                    : quizState.selectedOptions[
                                          quizState.currentIndex
                                      ] && option.is_correct
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                            }`}
                        >
                            <span className="font-semibold">
                                {optionLabels[index]}.{" "}
                            </span>
                            {option.description}
                        </button>
                    )
                )}
            </div>
            <AnswerFeedback
                quizState={quizState}
                questions={questions}
                optionLabels={optionLabels}
            />
        </div>
    );
}

export default Question;
