import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// Function to fetch all skills (not just by category)
export const fetchAllSkills = async () => {
  try {
    const skillsQuery = collection(db, 'skills');
    const skillsSnap = await getDocs(skillsQuery);

    if (skillsSnap.empty) {
      throw new Error('No skills found!');
    }

    // Extract skills data
    const skills = skillsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return skills;
  } catch (error) {
    throw new Error('Error fetching skills: ' + error.message);
  }
};
