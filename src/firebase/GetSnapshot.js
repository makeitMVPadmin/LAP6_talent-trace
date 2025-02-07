import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Function to fetch card data from Firestore by userId and cardId
export const fetchUserCard = async (userId, cardId) => {
  try {
    const cardsRef = collection(db, 'cards');
    const q = query(
      cardsRef,
      where('userId', '==', userId), // Filter by userId
      where('profileId', '==', cardId) // Filter by cardId (assuming profileId is used as cardId)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('No card found for this user and card ID!');
    }

    // Return the first document that matches the query
    const cardData = querySnapshot.docs[0].data();
    return cardData;
  } catch (error) {
    throw new Error('Error fetching card data: ' + error.message);
  }
};
