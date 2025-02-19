import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getQuestion = async (skillsId) => {
  const skillsRef = doc(db, 'skills', skillsId);
  const skill = await getDoc(skillsRef);

  if (skill.exists()) {
    console.log('Document data:', skill.data());
  } else {
    console.log('No such document!');
  }

  const { questionId } = skill.data();
  if (!questionId) {
    console.log('No question linked to this skill.');
    return [];
  }

  const questionRef = doc(db, 'questions', questionId);
  const questionSnap = await getDoc(questionRef);

  if (!questionSnap.exists()) {
    console.log('No such question found!');
    return [];
  }

  return [{ id: questionSnap.id, ...questionSnap.data() }];
};
