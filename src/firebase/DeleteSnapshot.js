import { db } from './firebase';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';

//function to delete a snapshot
export const deleteUserCard = async (cardId) => {
  try {
    const docRef = doc(db, 'cards', cardId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('No card found with this card ID!');
    }

    const deletedCard = docSnap.data(); //save the deleting documents data
    await deleteDoc(docRef);
    console.log(`Card with ID ${docRef.id} successfully deleted`); //log the deleted documents id on successful deletion

    return deletedCard;
  } catch (error) {
    throw new Error('Error deleting card data: ' + error.message);
  }
};
