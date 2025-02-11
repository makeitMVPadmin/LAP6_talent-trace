import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Function to fetch all of a user's snapshots by userId
export const fetchUserSnapshots = async (userId) => {
  try {
    // Query Firestore for all snapshots where userId matches
    const cardsQuery = query(
      collection(db, 'cards'),
      where('userId', '==', userId)
    );
    const cardsSnap = await getDocs(cardsQuery);

    if (cardsSnap.empty) {
      throw new Error('No snapshots found for this user!');
    }

    // Extract array of snapshots
    const cards = cardsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log('Fetched snapshots:', cards); // Log snapshots to console

    return cards;
  } catch (error) {
    throw new Error('Error fetching snapshots: ' + error.message);
  }
};
