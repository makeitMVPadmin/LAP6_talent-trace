import { db } from './firebase';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';

/**
 * Deletes a card and all its associated answers  from the database
 * @param {string} cardId  - The Id of the card that should be deleted
 * @returns {Promise<object>} - The data of the deleted card
 */

export const deleteUserCard = async (cardId) => {
  try {
    const cardDocRef = doc(db, 'cards', cardId);
    const cardDocSnap = await getDoc(cardDocRef);

    if (!cardDocSnap.exists()) {
      throw new Error('No card found with this card ID!');
    }

    const cardData = cardDocSnap.data();
    const answerIds = cardData.answerIds; //Extract the answer Ids from the card

    //Delete each answer document
    const answerDeletePromises = answerIds.map(async (answerId) => {
      const answerDocRef = doc(db, 'answers', answerId);
      await deleteDoc(answerDocRef);
      console.log(`Answer with Id ${answerId} successfully deleted`);
    });

    //Await for all answers to be deleted
    await Promise.all(answerDeletePromises);

    //Delete the card document
    await deleteDoc(cardDocRef);
    console.log(`Card with Id ${cardDocRef.id} successfully deleted`);
    return cardData;
  } catch (error) {
    throw new Error('Error deleting card data: ' + error.message);
  }
};
