import { db } from './firebase';
import {
  doc,
  updateDoc,
  getDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';

export const updateImageUrls = async (questionId, skillId, imageUrl) => {
  const validateUrl = (url) => {
    if (!url) return false; // Check for null or undefined
    if (url.startsWith('https://imgur.com/')) return true;
    try {
      new URL(url);
      return /\.(jpg|jpeg|png|webp|gif)$/.test(url);
    } catch {
      return false;
    }
  };

  if (!validateUrl(imageUrl)) {
    throw new Error('Invalid URL format');
  }

  try {
    // Create a reference to the specific answer document
    const answerRef = doc(db, 'answers', `${questionId}_${skillId}`);

    // Check if the document exists
    const answerDoc = await getDoc(answerRef);

    if (answerDoc.exists()) {
      // Update the existing document
      await updateDoc(answerRef, { image: imageUrl });
      console.log('Image URL updated successfully');
    } else {
      // Create a new document if it doesn't exist
      await setDoc(answerRef, {
        questionId: questionId,
        skillId: skillId,
        image: imageUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      console.log('New answer document created with image URL');
    }

    return { success: true };
  } catch (error) {
    console.error('Update failed:', error);
    throw new Error('Failed to update document');
  }
};
