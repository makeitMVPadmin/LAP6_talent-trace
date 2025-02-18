import { createContext, useState, useContext, useEffect, useMemo } from 'react';
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
  const [skills, setSkills] = useState([]); // Store all skills
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchAllCategories();
        const skillsData = await fetchAllSkills();

        setCategories(categoriesData);
        setSkills(skillsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoize skills grouped by category
  const skillsByCategory = useMemo(() => {
    const groupedSkills = {};
    categories.forEach((category) => {
      groupedSkills[category.id] = {
        name: category.name,
        skills: skills.filter((skill) => skill.categoryId === category.id),
      };
    });
    return groupedSkills;
  }, [categories, skills]);

  return (
    <SkillsContext.Provider
      value={{ categories, skillsByCategory, loading, error }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

// PropTypes Validation
SkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkillsContext;
