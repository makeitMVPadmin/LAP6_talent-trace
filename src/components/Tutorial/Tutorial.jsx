import { useState } from 'react';
import './Tutorial.scss';
import img1 from '../../assets/images/img1.svg';
import img2 from '../../assets/images/img2.svg';
import img3 from '../../assets/images/img3.svg';
import img4 from '../../assets/images/img4.svg';
import img5 from '../../assets/images/img5.svg';
import img6 from '../../assets/images/snapshot.png';
import right from '../../assets/icons/arrow-right.svg';
import left from '../../assets/icons/arrow-left.svg';

const slides = [
  {
    title: 'Showcase your skills',
    description: (
      <>
        Our Snapshots are designed to showcase your story, helping you stand out
        and build connections through three key categories:
        <span className="highlighted-text"> Technical Skills</span>,
        <span className="highlighted-text"> Personality</span>, and
        <span className="highlighted-text"> Professional Development</span>.
      </>
    ),
    image: img1,
  },
  {
    title: 'Showcase your skills',
    description:
      'From these three categories, you can select up to five of your top skills, allowing you to highlight your strengths in a way that truly represents you.',
    image: img2,
  },
  {
    title: 'Questionnaire',
    description:
      "Based on the skills and categories you select, personalized questions will be generated for you. You'll have the opportunity to answer each question in under 200 characters, allowing you to showcase your skills concisely. These responses will shape your Snapshot, which is designed to highlight both your expertise and personality.",
    image: img3,
  },
  {
    title: 'Additional skills & tools',
    description:
      'You can also add additional skills beyond the listed options to showcase your broad expertise and versatility, highlighting your talent across multiple areas.',
    image: img4,
  },
  {
    title: 'Add Photos',
    description:
      ' You also have the option to add photos to further personalize your Snapshot and visually highlight your skills.',
    image: img5,
  },
  {
    title: 'Generate Snapshot',
    description:
      'Once you complete your Snapshot, it will be automatically generated based on the skills, answers, and questions you selected and provided. You can then share your Snapshot with employers and connections through multiple exporting options to showcase your skills effectively.',
    image: img6,
  },
];

function Tutorial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // Reset animation on every click

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(''); // Reset animation briefly
      setTimeout(() => {
        setDirection('next');
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10); // Ensure re-render before updating state
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(''); // Reset animation briefly
      setTimeout(() => {
        setDirection('prev');
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, 10);
    }
  };

  return (
    <div className="tutorial">
      <div className={`tutorial__visuals-container ${direction}`}>
        <div className="tutorial__instructions">
          <h2 className="tutorial__instructions-title">
            {slides[currentIndex].title}
          </h2>
          <p className="tutorial__instructions-description">
            {slides[currentIndex].description}
          </p>

          {/* Show left arrow ONLY if it's not the first slide */}
          {currentIndex > 0 && (
            <img
              className="tutorial__arrow tutorial__arrow--left"
              src={left}
              alt="left arrow"
              onClick={prevSlide}
            />
          )}

          {/* Show right arrow ONLY if it's not the last slide */}
          {currentIndex < slides.length - 1 && (
            <img
              className="tutorial__arrow tutorial__arrow--right"
              src={right}
              alt="right arrow"
              onClick={nextSlide}
            />
          )}
        </div>
        <div className="tutorial__visuals">
          <img
            className="tutorial__visuals-sample"
            src={slides[currentIndex].image}
            alt="sample snapshot"
          />
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
