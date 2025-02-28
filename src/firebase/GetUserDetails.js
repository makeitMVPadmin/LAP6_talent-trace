import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// Function to fetch all user details
export const fetchUserDetails = async () => {
  try {
    const usersQuery = collection(db, 'users');
    const usersSnap = await getDocs(usersQuery);

    if (usersSnap.empty) {
      throw new Error('No user found!');
    }

    // Extract user data
    const userDetails = usersSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return userDetails;
  } catch (error) {
    throw new Error('Error fetching user details: ' + error.message);
  }
};
