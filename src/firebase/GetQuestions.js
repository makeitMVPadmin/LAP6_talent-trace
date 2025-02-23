import { db } from './firebase';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

// Function to get questions based on category and skillId
export const getQuestions = async (categoryId) => {
  try {
    // Fetch all skills in the category
    const skillsQuery = query(
      collection(db, 'skills'),
      where('categoryId', '==', categoryId)
    );
    const skillsSnapshot = await getDocs(skillsQuery);

    if (skillsSnapshot.empty) {
      console.log('No skills found in this category');
      return [];
    }

    // Store all the skillIds in an array
    const skillIds = [];
    skillsSnapshot.forEach((doc) => {
      skillIds.push(doc.id);
    });

    // Fetch the category name for the given categoryId
    const categoryRef = doc(db, 'categories', categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (!categorySnap.exists()) {
      console.log('No category found');
      return [];
    }

    const categoryName = categorySnap.data().name; // Assuming 'name' is the field

    // Prepare the final array of questions
    const questions = [];

    for (const skillId of skillIds) {
      const skillRef = doc(db, 'skills', skillId);
      const skill = await getDoc(skillRef);

      if (skill.exists()) {
        const skillData = skill.data();
        const { questionId, categoryId, skillName } = skillData;

        if (questionId) {
          // Fetch the question related to the skillId
          const questionRef = doc(db, 'questions', questionId);
          const questionSnap = await getDoc(questionRef);

          if (questionSnap.exists()) {
            const questionData = questionSnap.data();
            const question = questionData.question;

            // Push the question along with the skill and category data
            questions.push({
              question,
              categoryName,
              skillName, // Use skillName directly
              skillId,
              categoryId,
            });
          }
        }
      }
    }

    // Return all the questions found
    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};
