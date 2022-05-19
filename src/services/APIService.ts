import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] } // Use types from 'Question' and add this property

export enum Difficulty { // Set only correct options to difficulty
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuizQuestions = async (amount:number, difficulty: Difficulty) => { // These parameters are received from 'App'
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ( // results is the key where are the results
    {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer
      ]),
    }
  ))
}