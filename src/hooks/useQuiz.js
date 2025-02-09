import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useQuiz = (
    initialState = {
        currentIndex: 0,
        score: 0,
        selectedOptions: [],
    }
) => {
    const [questions, setQuestions] = useState([]);
    const [quizState, setQuizState] = useState(initialState);
    const [isNextButtonAnimating, setIsNextButtonAnimating] = useState(false);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl= import.meta.env.VITE_API_URL || "/api";
        axios
            .get(`${apiUrl}/Uw5CrX`)
            .then((response) => {
                console.log(response.data.questions);
                setQuestions(response.data.questions);
            })
            .catch((error) => {
                console.log(`Error while fetching questions: ${error}`);
            });
    }, []);

    const handleOptionSelection = (optionId, isCorrect) => {
        // Prevent multiple selections for the same question
        if (quizState.selectedOptions[quizState.currentIndex]) {
            console.log("Already answered");
            return;
        }

        // Save the selected option and update the score
        setQuizState((prevState) => {
            const updatedOptions = [...prevState.selectedOptions];
            updatedOptions[prevState.currentIndex] = optionId;

            // Return the updated state
            return {
                ...prevState,
                selectedOptions: updatedOptions,
                score: isCorrect ? prevState.score + 1 : prevState.score,
            };
        });

        // Start the animation and auto-navigation timer
        setIsNextButtonAnimating(true);
        timeoutRef.current = setTimeout(() => {
            // Navigate to the next question after 5 seconds
            handleQuestionNavigation(quizState.currentIndex + 1);
        }, 5000);
    };

    const handleQuestionNavigation = (index) => {
        setIsNextButtonAnimating(false);

        // Clear any existing timer
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Handle navigation logic
        if (index < 0) {
            setQuizState({ ...quizState, currentIndex: 0 });
        } else if (index >= questions.length) {
            navigate("/result", {
                state: { score: quizState.score, totalQuestions: questions.length },
            });
        } else {
            setQuizState((prevState) => ({
                ...prevState,
                currentIndex: index,
            }));
        }
    };

    return {
        questions,
        quizState,
        isNextButtonAnimating,
        handleOptionSelection,
        handleQuestionNavigation,
    };
};