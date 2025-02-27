import { Question } from '../Question/Question';
import { useQuestion } from '@/context/QuestionsContext';

function Questionnaire() {
  const { questions, error, loading } = useQuestion();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!questions || questions.length === 0)
    return <div>No questions available.</div>;

  return (
    <div>
      {questions.map((questionData, index) => {
        return (
          <Question
            key={index}
            questionData={questionData}
            questionNumber={index + 1}
          />
        );
      })}
    </div>
  );
}
export default Questionnaire;
