import { getQuestions } from '@/firebase/GetQuestions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { createContext, useState, useContext, useEffect } from 'react';

const QuestionContext = createContext();

export const useQuestion = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  const { categoryId, skillId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  const [skillName, setSkillName] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId && skillId) {
      const fetchQuestions = async () => {
        try {
          const data = await getQuestions(categoryId, skillId);
          if (!data || data.length === 0) throw new Error('No questions found');

          setQuestions(data.map((q) => q.question));
          setCategoryName(data[0].categoryName); // Assuming all questions have the same category
          setSkillName(data[0].skillName); // Assuming all questions belong to the same skill
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
          console.log('Error fetching questions:', err.message);
        }
      };

      fetchQuestions();
    }
  }, [categoryId, skillId]);

  return (
    <QuestionContext.Provider
      value={{ questions, categoryName, skillName, error, loading }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionContext;
