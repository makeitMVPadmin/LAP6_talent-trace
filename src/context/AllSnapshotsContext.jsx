import { createContext, useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUserSnapshots } from '../firebase/RetrieveAllSnapshots'; // Import the fetching function
import { deleteUserCard } from '../firebase/DeleteSnapshot'; //Import the delete function
import { fetchUserCard } from '../firebase/GetSnapshot'; // Import the fetching function

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      const fetchCardsData = async () => {
        setLoading(true);
        try {
          const data = await fetchUserSnapshots(userId);
          const deck = [];
          for (let i = 0; i < data.length; i++) {
            let draw = await fetchUserCard(userId, data[i].id);
            deck.push(draw);
          }
          setCards(deck);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchCardsData();
    }
  }, [userId]);

  //delete card
  const handleDeleteCard = async (cardId) => {
    try {
      await deleteUserCard(cardId);
      const updatedCards = cards.filter((card) => card.cardId !== cardId);
      setCards(updatedCards);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <CardsContext.Provider value={{ cards, error, loading, handleDeleteCard }}>
      {children}
    </CardsContext.Provider>
  );
};

// Prop types validation
CardsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardsContext;
