import { getQuestion } from '@/firebase/GetQuestions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { createContext, useState, useContext, useEffect } from 'react';

const QuestionContext = createContext();

export const useCard = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  const { skillsId, questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (skillsId && questionId) {
      const fetchQuestion = async () => {
        try {
          const data = await getQuestion(skillsId, questionId);
          setQuestion(data);
          console.log(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchQuestion();
    }
  }, [skillsId, questionId]);

  return (
    <QuestionContext.Provider value={{ question, error }}>
      {children}
    </QuestionContext.Provider>
  );
};

QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default QuestionContext;
