/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./services/APIService";
import "./App.scss";

type AnswerObject = {
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
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)


  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button onClick={startTrivia}>Start</button>
      <p>Score:</p>
      <p>Loading Questions...</p>
{/*       <QuestionCard
        questionNumber={questionNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[questionNumber].question}
        answers={questions[questionNumber].answers}
        userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
        callback={checkAnswer}
      /> */}

      <button onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
