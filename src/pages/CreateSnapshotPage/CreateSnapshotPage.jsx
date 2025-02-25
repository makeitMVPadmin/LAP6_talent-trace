import SkillsMenuCard from '@/components/SkillsMenu/SkillsMenu';
import { SelectedSkillsProvider } from '@/context/SelectedSkillsContext';
//import { Question } from '@/components/Question/Question';
import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
//import Questionnaire from '@/components/Questionnaire/Questionnaire';

const CreateSnapshotPage = () => {
  const [isProgressing, setIsProgressing] = useState(false);

  const handleButtonClick = () => {
    setIsProgressing(true);
  };

  return (
    <>
      <div className="flex flex-col m-32 items-center">
        <div className="mb-32">
          <ProgressBar isProgressing={isProgressing} />
        </div>
        <div>
          <SelectedSkillsProvider>
            <SkillsMenuCard onButtonClick={handleButtonClick} />
            {/*<Questionnaire />*/}
          </SelectedSkillsProvider>
        </div>
      </div>
    </>
  );
};

export default CreateSnapshotPage;
