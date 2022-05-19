import { AnswerObject } from "../../App"

type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => {
  return (
    <div>
      <p>Question: {questionNumber} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{ __html: question}}></p>
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={userAnswer ? true : false} onClick={callback} value={answer} style={{ backgroundColor: userAnswer && answer === userAnswer?.correctAnswer ? 'green' : ''}}>
              <span dangerouslySetInnerHTML={{ __html: answer}} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default QuestionCard;