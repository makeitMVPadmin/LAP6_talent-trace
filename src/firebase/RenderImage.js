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
    if (!url) return false;
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
    const answerRef = doc(db, 'answers', `${questionId}_${skillId}`);

    const answerDoc = await getDoc(answerRef);

    if (answerDoc.exists()) {
      await updateDoc(answerRef, { image: imageUrl });
      console.log('Image URL updated successfully');
    } else {
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
