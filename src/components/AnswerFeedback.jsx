import { useEffect, useState } from "react";

function AnswerFeedback({ quizState, questions, optionLabels }) {
    const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);

    useEffect(() => {
        setIsAnswerExpanded(false);
    }, [quizState.currentIndex]);

    return (
        <>
        <div 
        className={`transition-all duration-1000 ${quizState.selectedOptions[quizState.currentIndex] ? "max-h-40 opacity-100": "max-h-0 opacity-0"}`}>

       
            {quizState.selectedOptions[quizState.currentIndex] && (
                <div
                    onClick={() => setIsAnswerExpanded(!isAnswerExpanded)}
                    className="mt-4 border rounded-lg p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                    {/* Header with Expand Icon */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-medium">
                            Correct answer is:{" "}
                            {
                                optionLabels[
                                    questions[
                                        quizState.currentIndex
                                    ].options.findIndex(
                                        (option) => option.is_correct
                                    )
                                ]
                            }{" "}
                            .{" "}
                            {
                                questions[quizState.currentIndex].options.find(
                                    (option) => option.is_correct
                                ).description
                            }
                        </span>
                        {/* Chevron Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
                                isAnswerExpanded ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>

                    {/* Expanded Content */}
                    <div
                        className={`overflow-scroll transition-all duration-300 ${
                            isAnswerExpanded
                                ? "max-h-26 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="mt-4">
                            <p className="text-gray-700">
                                {
                                    questions[quizState.currentIndex]
                                        .detailed_solution
                                }
                            </p>
                        </div>
                    </div>
                </div>
            )}
             </div>
        </>
    );
}

export default AnswerFeedback;
