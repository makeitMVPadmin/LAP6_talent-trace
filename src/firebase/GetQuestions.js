import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

// Function to get questions based on skillId
export const getQuestions = async (skillIds, categoryIds) => {
  try {
    const promises = skillIds.map((skillId, index) => {
      return fetchQuestion(skillId, categoryIds[index]); //fetches each question, categoryId is provided to fetch the name of the category
    });

    const questions = await Promise.all(promises);
    return questions.filter(Boolean);
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

const fetchQuestion = async (skillId, categoryId) => {
  try {
    // Fetch the category name for the given categoryId
    const categoryRef = doc(db, 'categories', categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (!categorySnap.exists()) {
      console.log('No category found');
      return [];
    }

    const categoryName = categorySnap.data().name;

    // Fetch the question related to the skillId

    const skillRef = doc(db, 'skills', skillId);
    const skillSnap = await getDoc(skillRef);

    if (skillSnap.exists()) {
      const skillData = skillSnap.data();
      const { questionId, skillName } = skillData;

      //check if questionId exists and retrive the question
      if (questionId) {
        const questionRef = doc(db, 'questions', questionId);
        const questionSnap = await getDoc(questionRef);

        if (questionSnap.exists()) {
          const questionData = questionSnap.data();
          const question = questionData.question;

          //return question along with the skillName Id, categorName, id
          return {
            question,
            skillName,
            skillId,
            categoryName,
            categoryId,
          };
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching question', error);
    return null;
  }
};

/*

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

*/
