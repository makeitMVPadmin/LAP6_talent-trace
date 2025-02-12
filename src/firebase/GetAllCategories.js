import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export const fetchAllCategories = async () => {
  try {
    const categoriesQuery = collection(db, 'categories');
    const categoriesSnap = await getDocs(categoriesQuery);

    if (categoriesSnap.empty) {
      throw new Error('No categories found!');
    }
    const categories = categoriesSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return categories;
  } catch (error) {
    throw new Error('Error fetching categories: ' + error.message);
  }
};
