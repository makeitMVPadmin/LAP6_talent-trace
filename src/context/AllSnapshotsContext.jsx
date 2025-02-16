import { createContext, useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUserSnapshots } from '../firebase/RetrieveAllSnapshots'; // Import the fetching function
import { deleteUserCard } from '../firebase/DeleteSnapshot'; //Import the delete function

// Create Context
const CardsContext = createContext();

// Context Hook
export const useCards = () => {
  return useContext(CardsContext);
};

// Provider
export const CardsProvider = ({ children }) => {
  const { userId } = useParams(); // Get userID from URL
  const [cards, setCards] = useState(null); // useState for snapshots
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchCardsData = async () => {
        try {
          const data = await fetchUserSnapshots(userId);
          setCards(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchCardsData();
    }
  }, [userId]);

  //delete card
  const handleDeleteCard = async (cardId) => {
    try {
      await deleteUserCard(cardId);
      setCards(cards.filter((card) => card.id !== cardId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <CardsContext.Provider value={{ cards, error, handleDeleteCard }}>
      {children}
    </CardsContext.Provider>
  );
};

// Prop types validation
CardsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardsContext;
