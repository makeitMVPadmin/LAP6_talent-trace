import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SelectedSkillsContext = createContext();

const SelectedSkillsProvider = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const maxSelection = 5;

  // Event handler for skill selection/deselection
  const handleSkillClick = (skill) => {
    if (selectedSkills.some((s) => s.skillId === skill.id)) {
      setSelectedSkills((prev) => prev.filter((s) => s.skillId !== skill.id));
    }
    // Only allow selecting if there are fewer than 5 selected skills
    else if (selectedSkills.length < maxSelection) {
      setSelectedSkills((prev) => [
        ...prev,
        { skillId: skill.id, categoryId: skill.categoryId },
      ]);
    }
  };

  return (
    <SelectedSkillsContext.Provider
      value={{ selectedSkills, handleSkillClick, maxSelection }}
    >
      {children}
    </SelectedSkillsContext.Provider>
  );
};

SelectedSkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SelectedSkillsProvider, SelectedSkillsContext };
