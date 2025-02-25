import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SelectedSkillsContext = createContext();

const SelectedSkillsProvider = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const maxSelection = 5;

  // Event handler for skill selection/deselection
  const handleSkillClick = (skillId) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills((prev) => prev.filter((id) => id !== skillId));
    }
    // Only allow selecting if there are fewer than 5 selected skills
    else if (selectedSkills.length < maxSelection) {
      setSelectedSkills((prev) => [...prev, skillId]);
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
