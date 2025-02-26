import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Function to fetch all user details
export const fetchUserDetail = async (id) => {
  try {
    const userQuery = query(
      collection(db, 'users'),
      where('__name__', '==', id)
    );
    const userSnap = await getDocs(userQuery);

    if (userSnap.empty) {
      throw new Error('No user found!');
    }

    // Extract user data
    const userDetail = userSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return userDetail;
  } catch (error) {
    throw new Error('Error fetching user details: ' + error.message);
  }
};
