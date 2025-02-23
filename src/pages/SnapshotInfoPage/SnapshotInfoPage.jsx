import Learn from '../../components/Learn/Learn.jsx';
import { useRef } from 'react';
import Hero from '@/components/Hero/Hero';
function SnapshotInfoPage() {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Hero scrollToTarget={scrollToTarget} />

      <div ref={targetRef}>
        <Learn />
      </div>
    </div>
  );
}

export default SnapshotInfoPage;
