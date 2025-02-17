import { useState } from 'react';
import { useSkills } from '../../context/AllSkillsContext';

const SelectSkills = () => {
  const { categories, skillsByCategory, loading, error } = useSkills();
  const [selectedSkills, setSelectedSkills] = useState([]); // Store selected skill IDs

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  const handleSkillClick = (skillId) => {
    // If the skill is already selected, deselect it
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills((prev) => prev.filter((id) => id !== skillId));
    } else {
      // Only allow selecting if there are fewer than 5 selected skills
      if (selectedSkills.length < 5) {
        setSelectedSkills((prev) => [...prev, skillId]);
      }
    }
  };
  console.log(setSelectedSkills);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Skills by Category</h2>
      {categories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        categories.map((category) => {
          const categorySkills = skillsByCategory[category.id]?.skills || [];

          return (
            <div className="flex flex-col mb-6" key={category.id}>
              <h3 className="text-blue-950 text-lg font-semibold mb-2">
                {category.name}
              </h3>
              {categorySkills.length > 0 ? (
                <ul className="flex flex-wrap space-x-4">
                  {categorySkills.map((skill) => {
                    // Check if the skill is selected
                    const isSelected = selectedSkills.includes(skill.id);
                    return (
                      <li
                        key={skill.id}
                        className={`border px-2 py-1 rounded cursor-pointer ${
                          isSelected
                            ? 'bg-yellow-500 text-white' // Change color to yellow when selected
                            : 'bg-gray-100'
                        }`}
                        onClick={() => handleSkillClick(skill.id)}
                      >
                        {skill.skillName}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="italic text-gray-500">
                  No skills available for this category
                </p>
              )}
            </div>
          );
        })
      )}
      <p className="mt-4">You can select up to 5 skills.</p>
    </div>
  );
};

export default SelectSkills;
