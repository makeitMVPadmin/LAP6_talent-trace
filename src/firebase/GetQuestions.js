import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getQuestions = async (skillIds, categoryIds) => {
  try {
    const promises = skillIds.map((skillId, index) => {
      return fetchQuestion(skillId, categoryIds[index]);
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
    const categoryRef = doc(db, 'categories', categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (!categorySnap.exists()) {
      console.log('No category found');
      return [];
    }

    const categoryName = categorySnap.data().name;

    const skillRef = doc(db, 'skills', skillId);
    const skillSnap = await getDoc(skillRef);

    if (skillSnap.exists()) {
      const skillData = skillSnap.data();
      const { questionId, skillName } = skillData;

      if (questionId) {
        const questionRef = doc(db, 'questions', questionId);
        const questionSnap = await getDoc(questionRef);

        if (questionSnap.exists()) {
          const questionData = questionSnap.data();
          const question = questionData.question;

          return {
            question,
            questionId,
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
