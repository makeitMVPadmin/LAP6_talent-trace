import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Use to get route params
import { useCard } from '../../context/SnapshotContext'; // Use context to store card data
import { fetchUserCard } from '../../firebase/GetSnapshot'; // Function to fetch card data from Firebase

function DisplayComponent() {
  const { userId, cardId } = useParams(); // Get userId and cardId from the URL
  const { card, setCard, error, setError } = useCard(); // Get and set card data from context

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        // Fetch card data from Firebase based on userId and cardId
        const data = await fetchUserCard(userId, cardId);
        setCard(data); // Store the fetched card data in context
      } catch (err) {
        setError(err.message); // Handle errors if fetching fails
      }
    };

    fetchCardData(); // Fetch the card data on component mount
  }, [userId, cardId, setCard, setError]); // Re-fetch when userId or cardId changes

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  if (!card) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div>
      <h2>Card Details</h2>
      <pre>{JSON.stringify(card, null, 2)}</pre>{' '}
      {/* Display fetched card data */}
    </div>
  );
}

export default DisplayComponent;
