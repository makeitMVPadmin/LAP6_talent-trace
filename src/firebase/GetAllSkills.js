import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Function to fetch skills by categoryId
export const fetchSkillsByCategory = async (categoryId) => {
  try {
    // Query Firestore for skills where categoryId matches
    const skillsQuery = query(
      collection(db, 'skills'),
      where('categoryId', '==', categoryId)
    );
    const skillsSnap = await getDocs(skillsQuery);

    if (skillsSnap.empty) {
      throw new Error('No skills found for this category!');
    }

    // Extract skills data
    const skills = skillsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log('Fetched skills:', skills); // Log skills to console

    return skills;
  } catch (error) {
    throw new Error('Error fetching skills: ' + error.message);
  }
};
