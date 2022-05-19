type QuestionCardProps = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({question, answer, callback, userAnswer, questionNumber, totalQuestions}) => {
  return (
    <div>
      <p>Question: {questionNumber} / {question} </p>
    </div>
  )
};

export default QuestionCard;