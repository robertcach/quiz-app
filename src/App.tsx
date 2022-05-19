/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./services/APIService";
import "./App.scss";

export type AnswerObject = {
  question: string
  answer: string; // user's answer
  correct: boolean; // tell is user's answer is correct
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]); // This state's type is an array of 'QuestionState'
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)

/* 
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)); */

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    // save data from fetch API

    setQuestions(newQuestions) // Set 'questions' state with the variables witch has the data from fetch API
    console.log(newQuestions);
    setScore(0);
    setUserAnswers([])
    setQuestionNumber(0)
    setLoading(false)
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value; // Get the value of the button
      const correct = questions[questionNumber].correct_answer === answer // Check if the answer is correct
      
      if (correct) setScore(score + 1) 

      // Create an object with the data from user's answer
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer
      }

      // Save object adding in 'userAnswers' array
      setUserAnswers([...userAnswers, answerObject])
      console.log(userAnswers);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = questionNumber + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setQuestionNumber(nextQuestion)
    }
  }
  
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>Start</button>
        ) :
        null
      }
      {!gameOver && <p>Score: {score}</p>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={questionNumber + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          callback={checkAnswer}
        />)
      }
      
      {!gameOver && !loading && userAnswers.length === questionNumber + 1 && questionNumber !== TOTAL_QUESTIONS - 1 ? (
        <button onClick={nextQuestion}>Next question</button>
        ) :
        null
      }
    </div>
  );
}

export default App;
