import { db } from './firebase';
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

//Fetch multiple documents from Firestore based on an array of IDs.
//Firestore's limit of 10 `in` queries per request. if more than 10 IDs function need to be changed
const fetchDocumentsByIds = async (collectionName, ids) => {
  if (!ids || ids.length === 0) return [];

  try {
    const q = query(
      collection(db, collectionName),
      where('__name__', 'in', ids)
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    return [];
  }
};
export const fetchUserCard = async (userId, cardId) => {
  try {
    const cardRef = doc(db, 'cards', cardId);
    const cardSnap = await getDoc(cardRef);

    if (!cardSnap.exists()) {
      throw new Error('No card found for this card ID!');
    }

    const cardData = cardSnap.data();

    if (cardData.userId !== userId) {
      throw new Error('Card does not belong to the specified user!');
    }

    // Fetch skills based on the skillIds in the card
    const skills = await fetchDocumentsByIds('skills', cardData.skillIds || []);

    // Fetch answers based on the answerIds in the card
    const answers = await fetchDocumentsByIds(
      'answers',
      cardData.answerIds || []
    );

    // Extract question IDs from the answers
    const questionIds = [
      ...new Set(answers.map((answer) => answer.questionId)),
    ];

    // Fetch questions based on the extracted questionIds
    const questions = await fetchDocumentsByIds('questions', questionIds);

    // Map the answers to include their associated question
    const answersWithQuestions = answers.map((answer) => ({
      id: answer.id,
      answer: answer.answer,
      image: answer.image,
      relatedSkills: answer.relatedSkills || [], // Related skills are already an array
      question: questions.find((q) => q.id === answer.questionId)
        ? {
            id: questions.find((q) => q.id === answer.questionId).id,
            question: questions.find((q) => q.id === answer.questionId)
              .question,
          }
        : null,
    }));

    // Structure the skills as an array of { id, skillName }
    const skillsWithIds = skills.map((skill) => ({
      id: skill.id,
      skillName: skill.skillName,
    }));

    // Final structured object with skills, answers, cardId, and userId
    return {
      cardId,
      userId,
      skills: skillsWithIds,
      answers: answersWithQuestions,
    };
  } catch (error) {
    console.error('Error fetching card data:', error);
    throw new Error(error.message);
  }
};
