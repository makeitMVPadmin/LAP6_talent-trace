import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

export const writeUserData = async (
  questionId,
  answerId,
  answer,
  relatedSkills = [],
  imageUrl
) => {
  if (!imageUrl?.trim() || !answer?.trim() || !relatedSkills.length) {
    alert('Please fill in all fields');
    return;
  }

  const answerRef = doc(db, 'answers', answerId);
  try {
    await setDoc(
      answerRef,
      {
        response: answer,
        image: imageUrl,
        additionalSkills: relatedSkills,
        questionId,
      },
      { merge: true }
    );
    console.log('Answers uploaded successfully!');
  } catch (error) {
    console.error('Error uploading your answers:', error);
  }
};
