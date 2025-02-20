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
  const [data, setData] = useState({ categories: [], skills: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchAllCategories();
        const skillsData = await fetchAllSkills();
        setData({ categories: categoriesData, skills: skillsData });
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
    data.categories.forEach((category) => {
      groupedSkills[category.id] = {
        name: category.name,
        skills: data.skills.filter((skill) => skill.categoryId === category.id),
      };
    });
    return groupedSkills;
  }, [data]); // Only re-run when `data` changes

  return (
    <SkillsContext.Provider
      value={{ categories: data.categories, skillsByCategory, loading, error }}
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
