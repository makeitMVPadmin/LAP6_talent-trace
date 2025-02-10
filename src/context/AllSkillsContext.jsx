import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSkillsByCategory } from '../firebase/GetAllSkills';

// Create context
const SkillsContext = createContext();

// Custom hook to use the context
export const useSkills = () => {
  return useContext(SkillsContext);
};

// Provider component
export const SkillsProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState(''); // Store selected category
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categoryId) {
      const fetchSkillsData = async () => {
        try {
          const data = await fetchSkillsByCategory(categoryId);
          setSkills(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchSkillsData();
    }
  }, [categoryId]);

  return (
    <SkillsContext.Provider
      value={{ skills, error, categoryId, setCategoryId }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

// Prop types validation
SkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkillsContext;
