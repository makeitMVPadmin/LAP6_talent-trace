import { useEffect } from 'react';
import { SkillsProvider, useSkills } from './context/AllSkillsContext';

const SkillsLogger = () => {
  const { skills, error } = useSkills();

  useEffect(() => {
    if (error) {
      console.error('Error fetching skills:', error);
    } else {
      console.log('Fetched skills:', skills);
    }
  }, [skills, error]);

  return null; // No UI, just logging skills
};

function App() {
  const categoryId = 'veBZ4UWxf1xfpQphmcEY'; // Example category ID

  return (
    <SkillsProvider categoryId={categoryId}>
      <SkillsLogger />
    </SkillsProvider>
  );
}

export default App;
