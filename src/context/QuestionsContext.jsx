import { getQuestions } from '@/firebase/GetQuestions';
import PropTypes from 'prop-types';
import { SelectedSkillsContext } from './SelectedSkillsContext';
import { createContext, useState, useContext, useEffect } from 'react';

const QuestionContext = createContext();

export const useQuestion = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  const { selectedSkills } = useContext(SelectedSkillsContext);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const skillIds = selectedSkills.map((skill) => skill.skillId);
        const categoryIds = selectedSkills.map((skill) => skill.categoryId);

        const data = await getQuestions(skillIds, categoryIds);
        if (!data || data.length === 0) throw new Error('No questions found');

        setQuestions(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.log('Error fetching questions:', err.message);
      }
    };

    fetchQuestions();
  }, [selectedSkills]);

  return (
    <QuestionContext.Provider value={{ questions, error, loading }}>
      {children}
    </QuestionContext.Provider>
  );
};

QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionContext;
