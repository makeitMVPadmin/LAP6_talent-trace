import { Question } from '../Question/Question';
import { SelectedSkillsContext } from '@/context/SelectedSkillsContext';
import { useContext } from 'react';

function Questionnaire() {
  const { selectedSkills } = useContext(SelectedSkillsContext);

  return (
    <div>
      {selectedSkills.map((skill, index) => {
        <Question
          key={index}
          skillId={skill.id}
          categoryId={skill.categoryId}
        />;
      })}
    </div>
  );
}
export default Questionnaire;
