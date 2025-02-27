import { Question } from '../Question/Question';
import { useQuestion } from '@/context/QuestionsContext';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import { Button } from '../ui/button';

function Questionnaire() {
  const { questions, error, loading } = useQuestion();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!questions || questions.length === 0)
    return <div>No questions available.</div>;

  return (
    <>
      <Card className="Skills_Questionnaire flex flex-col bg-inherit w-[38.813rem] h-full border-none shadow-none">
        <CardHeader>
          <CardTitle className="Skills_Questionnaire-title w-[27.938rem] mb-4 font-fraunces font-semibold text-[1.75rem] leading-[2.993rem] tracking-[0.016rem] text-customBlue">
            Skill Questionnaire
          </CardTitle>
          <CardDescription className="Skills_Questionnaire-description  mt-[5rem] text-base font-montserrat font-normal !text-customBlue leading-6">
            Complete the questionnaire and highlight your top skills in the
            selected categories to showcase your technical strengths and
            personality
          </CardDescription>
        </CardHeader>
        <CardContent className="Skills_Questionnaire-content h-[90%] flex flex-col justify-center">
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
        </CardContent>
        <CardFooter className="Skills_Questionnaire-footer flex justify-end">
          <Button
            className={`Skills_Questionnaire-button w-32 h-10 pl-4 pr-4 rounded-[0.625rem] border-t border-l border-r-2 border-b-4 border-customBlue justify-center items-center gap-2 inline-flex `}
            variant="ghost"
            //disabled={selectedSkills.length != 5}
            //onClick={onButtonClick}
          >
            <div className="Skills_Questionnaire-button-text text-center text-white text-[1.125rem] font-montserrat font-semibold leading-[1.625rem]">
              Submit
            </div>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default Questionnaire;
