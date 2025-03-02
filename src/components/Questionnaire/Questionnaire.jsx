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
import { useState } from 'react';
import postMultipleAnswersAndCreateCard from '@/firebase/PostAnswers';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

function Questionnaire() {
  const { questions, error, loading } = useQuestion();
  const [responses, setResponses] = useState({});
  const [relatedSkills, setRelatedSkills] = useState({});
  const [imageUrls, setImageUrls] = useState({});

  const { userId } = useParams();
  const navigate = useNavigate();

  if (!userId) {
    return <div>Loading...</div>;
  }

  if (loading) return <div>Questions Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!questions || questions.length === 0)
    return <div>No questions available.</div>;

  //create handler for responses
  const handleResponseChange = (questionId, response) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: response,
    }));
  };

  //create handler for related skills
  const handleRelatedSkillsChange = (questionId, skillsList) => {
    setRelatedSkills((prevRelatedSkills) => ({
      ...prevRelatedSkills,
      [questionId]: skillsList,
    }));
  };

  //create handler for image urls
  const handleImageChange = (questionId, imageUrl) => {
    setImageUrls((prevImageUrls) => ({
      ...prevImageUrls,
      [questionId]: imageUrl,
    }));
  };

  //set conditions for enabling submit
  const isSubmitEnabled =
    Object.keys(responses).length === questions.length &&
    Object.keys(relatedSkills).length === questions.length &&
    Object.keys(imageUrls).length === questions.length &&
    Object.values(relatedSkills).every(
      (skillsList) => skillsList.length > 0 && skillsList.length <= 3
    );

  //handle submit
  const handleSubmit = async () => {
    if (isSubmitEnabled) {
      //prepare the answers object - update to correct structure
      const answers = questions.map((questionData) => {
        return {
          questionId: questionData.questionId,
          skillId: questionData.skillId,
          answer: responses[questionData.questionId],
          relatedSkills: relatedSkills[questionData.questionId] || [],
          image: imageUrls[questionData.questionId] || '',
        };
      });

      //call postAnswers function
      try {
        const result = await postMultipleAnswersAndCreateCard(
          answers,
          '',
          userId
        );
        console.log('Answers posted Successfully', result);

        // Navigate to the cards route and add a query param which is a flag
        navigate(`/users/${userId}/cards?showModal=true`);
      } catch (error) {
        console.error('Error posting answers:', error);
        toast('Failed to submit questionnaire. Please try again.', {
          description: 'An error occurred during submission.',
          level: 'error',
          duration: 5000,
          action: {
            label: 'Try Again',
            onClick: () => console.log('Retry clicked'),
          },
        });
      }
    }
  };

  return (
    <>
      <Toaster />
      <Card className="Skills_Questionnaire flex flex-col bg-inherit w-full md:w-[38.813rem] h-full border-none shadow-none">
        <CardHeader>
          <CardTitle className="Skills_Questionnaire-title w-[27.938rem] mb-4 font-fraunces font-semibold text-[1.75rem] leading-[2.993rem] tracking-[0.016rem] text-customBlue">
            Skill Questionnaire
          </CardTitle>
          <CardDescription className="Skills_Questionnaire-description  mt-[5rem] pb-6 text-base font-montserrat font-normal !text-customBlue leading-6">
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
                  onResponseChange={handleResponseChange}
                  onRelatedSkillsChange={handleRelatedSkillsChange}
                  onImageChange={handleImageChange}
                />
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="Skills_Questionnaire-footer flex justify-end">
          <Button
            className={`Skills_Questionnaire-button w-32 h-10 pl-4 pr-4 rounded-[0.625rem] border-t border-l border-r-2 border-b-4 border-customBlue justify-center items-center gap-2 inline-flex ${isSubmitEnabled ? 'button-enabled cursor-pointer' : 'button-disabled cursor-not-allowed'} disabled:opacity-100`}
            variant="ghost"
            disabled={!isSubmitEnabled}
            onClick={handleSubmit}
          >
            <div className="Skills_Questionnaire-button-text text-center text-white text-[1.125rem] font-montserrat font-semibold leading-[1.625rem] ">
              Submit
            </div>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default Questionnaire;
