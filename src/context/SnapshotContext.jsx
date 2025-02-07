import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Create context to store card data
const CardContext = createContext();

// Custom hook to use the card context
export const useCard = () => {
  return useContext(CardContext);
};

// Provider component to manage the state of card data
export const CardProvider = ({ children }) => {
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  return (
    <CardContext.Provider value={{ card, setCard, error, setError }}>
      {children}
    </CardContext.Provider>
  );
};

// Prop types validation for children
CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContext;
