import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getQuestion = async (questionId) => {
  const skillsRef = doc(db, 'skills', questionId);
  const question = await getDoc(skillsRef);

  if (question.exists()) {
    console.log('Document data:', question.data());
  } else {
    console.log('No such document!');
  }
};
