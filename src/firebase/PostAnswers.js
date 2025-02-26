import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const postMultipleAnswersAndCreateCard = async (answers, profileId, userId) => {
  try {
    // Post all answers and get their IDs
    const answerPromises = answers.map(async (answer) => {
      const answerData = {
        ...answer,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, 'answers'), answerData);
      return { id: docRef.id, skillId: answer.skillId }; // Collect ID & skillId
    });

    const answerResults = await Promise.all(answerPromises);

    // Extract unique skillIds from answers
    const skillIds = answerResults.map((item) => item.skillId);

    // Get answerIds
    const answerIds = answerResults.map((item) => item.id);

    // Create a card using the extracted skillIds
    const cardData = {
      answerIds, // Store all answer IDs in the card
      skillIds, //  skill IDs extracted from answers
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      profileId,
      userId,
    };

    const cardRef = await addDoc(collection(db, 'cards'), cardData);
    console.log('Card created successfully with ID:', cardRef.id);
    return { answerIds, cardId: cardRef.id };
  } catch (error) {
    console.error('Error posting answers and creating card:', error);
    throw error;
  }
};

export default postMultipleAnswersAndCreateCard;
