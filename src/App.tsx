import React from "react";
import "./App.scss";
import QuestionCard from "./components/QuestionCard/QuestionCard";

function App() {
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
      <QuestionCard />
      
      <button onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
