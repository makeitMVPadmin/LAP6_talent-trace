import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAllCategories } from '../firebase/GetAllCategories';
import { fetchAllSkills } from '../firebase/GetAllSkills';

// Create Context
const SkillsContext = createContext();

// Custom Hook
export const useSkills = () => {
  return useContext(SkillsContext);
};

// Provider Component
export const SkillsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]); // Store categories
  const [skillsByCategory, setSkillsByCategory] = useState({}); // Store skills grouped by category
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all categories and skills
        const categoriesData = await fetchAllCategories();
        const skillsData = await fetchAllSkills();

        // Group skills by category
        const groupedSkills = {};
        categoriesData.forEach((category) => {
          groupedSkills[category.id] = {
            name: category.name, // Store category name
            skills: skillsData.filter(
              (skill) => skill.categoryId === category.id
            ),
          };
        });

        // Update state
        setCategories(categoriesData);
        setSkillsByCategory(groupedSkills);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SkillsContext.Provider
      value={{ categories, skillsByCategory, loading, error }}
    >
      {console.log(skillsByCategory)}
      {children}
    </SkillsContext.Provider>
  );
};

// PropTypes Validation
SkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkillsContext;
