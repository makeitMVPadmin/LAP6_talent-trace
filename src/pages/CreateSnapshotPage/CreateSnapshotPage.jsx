import SkillsMenuCard from '@/components/SkillsMenu/SkillsMenu';
import { SelectedSkillsProvider } from '@/context/SelectedSkillsContext';
//import { Question } from '@/components/Question/Question';

const CreateSnapshotPage = () => {
  return (
    <div className="flex flex-row m-32 justify-center">
      <SelectedSkillsProvider>
        <SkillsMenuCard />
        {/*<Question />*/}
      </SelectedSkillsProvider>
    </div>
  );
};

export default CreateSnapshotPage;
