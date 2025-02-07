import { createContext, useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Get dynamic params
import PropTypes from 'prop-types';
import { fetchUserCard } from '../firebase/GetSnapshot'; // Import the fetching function

// Create context
const CardContext = createContext();

// Custom hook to use the context
export const useCard = () => {
  return useContext(CardContext);
};

// Provider component
export const CardProvider = ({ children }) => {
  const { userId, cardId } = useParams(); // Get URL parameters
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId && cardId) {
      const fetchCardData = async () => {
        try {
          const data = await fetchUserCard(userId, cardId);
          setCard(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchCardData();
    }
  }, [userId, cardId]);

  return (
    <CardContext.Provider value={{ card, error }}>
      {children}
    </CardContext.Provider>
  );
};

// Prop types validation
CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContext;
