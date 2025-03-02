import SkillsMenuCard from '@/components/SkillsMenu/SkillsMenu';
import { SelectedSkillsProvider } from '@/context/SelectedSkillsContext';
import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Questionnaire from '@/components/Questionnaire/Questionnaire';
import { QuestionProvider } from '@/context/QuestionsContext';

const CreateSnapshotPage = () => {
  const [isProgressing, setIsProgressing] = useState(false);

  const handleButtonClick = () => {
    setIsProgressing(true);
  };

  return (
    <>
      <div className="flex flex-col m-12 md:m-32 items-center justify-center">
        <div className="mb-6 md:mb-32">
          <ProgressBar isProgressing={isProgressing} />
        </div>
        <div>
          <SelectedSkillsProvider>
            {isProgressing ? (
              <QuestionProvider>
                <Questionnaire />
              </QuestionProvider>
            ) : (
              <SkillsMenuCard onButtonClick={handleButtonClick} />
            )}
          </SelectedSkillsProvider>
        </div>
      </div>
    </>
  );
};

export default CreateSnapshotPage;
