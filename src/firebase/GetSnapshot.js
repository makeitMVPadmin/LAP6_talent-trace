import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

// Function to fetch card data from Firestore by userId and cardId
export const fetchUserCard = async (userId, cardId) => {
  try {
    // Directly reference the document by cardId
    const cardRef = doc(db, 'cards', cardId);
    const cardSnap = await getDoc(cardRef);

    if (!cardSnap.exists()) {
      throw new Error('No card found for this card ID!');
    }

    const cardData = cardSnap.data();

    // Ensure the card belongs to the correct user
    if (cardData.userId !== userId) {
      throw new Error('Card does not belong to the specified user!');
    }

    return cardData;
  } catch (error) {
    throw new Error('Error fetching card data: ' + error.message);
  }
};
