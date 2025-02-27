import React, { useContext } from 'react';
import { useSkills } from '../../context/AllSkillsContext';
import { SelectedSkillsContext } from '@/context/SelectedSkillsContext';

// Memoized component to prevent unnecessary re-renders
const SelectSkills = React.memo(() => {
  const { categories, skillsByCategory, loading, error } = useSkills();
  const { selectedSkills, handleSkillClick } = useContext(
    SelectedSkillsContext
  );

  // Helper function to capitalize the first letter of each word in a string
  const capitalizeFirstLetter = (text) => {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <div>
      {categories
        .filter(
          (category) => (skillsByCategory[category.id]?.skills || []).length > 0
        ) // Exclude categories with no skills
        .map((category) => {
          const categorySkills = skillsByCategory[category.id].skills;

          return (
            <div className="flex flex-col mb-6" key={category.id}>
              <h3 className="text-customBlue font-montserrat text-lg font-medium leading-6 mb-6 mt-2">
                {capitalizeFirstLetter(category.name)}
              </h3>
              <ul className="flex flex-wrap gap-y-4 gap-x-3 mb-6">
                {categorySkills.map((skill) => {
                  const isSelected = selectedSkills.some(
                    (s) => s.id === skill.id
                  );
                  return (
                    <li
                      key={skill.id}
                      className={`px-4 py-2 text-customDark font-montserrat text-sm font-medium leading-4 rounded-full cursor-pointer border transition-all capitalize ${
                        isSelected
                          ? 'border-customBlue border-b-4 bg-customYellow' // Selected skill styling
                          : 'border border-gray-200 bg-customGray' // Unselected skill styling
                      }`}
                      onClick={() => handleSkillClick(skill)} // Call handler when a skill is clicked
                    >
                      {capitalizeFirstLetter(skill.skillName)}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
});

// Set the display name for the memoized component
SelectSkills.displayName = 'SelectSkills';

export default SelectSkills;
