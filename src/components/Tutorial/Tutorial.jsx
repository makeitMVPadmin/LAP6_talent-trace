import { useState } from 'react';
//import img1 from '../../assets/images/img1.svg';
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
        From these three categories, you can select up to five of your top
        skills, allowing you to highlight your strengths in a way that truly
        represents you.
      </>
    ),
    image: img2,
  },
  {
    title: 'Questionnaire',
    description:
      "Based on the skills and categories you select, personalized questions will be generated for you. You'll have the opportunity to answer each question in under 200 characters, allowing you to showcase your skills concisely.",
    image: img3,
  },
  {
    title: 'Additional skills & tools',
    description:
      'You can also add additional skills beyond the listed options to showcase your broad expertise and versatility.',
    image: img4,
  },
  {
    title: 'Add Photos',
    description:
      'You also have the option to add a photo that best represents your answer to further personalize your Snapshot and visually highlight your skills.',
    image: img5,
  },
  {
    title: 'Generate Snapshot',
    description:
      'Once you complete your Snapshot, it will be automatically generated based on the skills, answers, and questions you selected.',
    image: img6,
  },
];

function Tutorial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-shrink-0 relative overflow-visible items-center justify-center bg-blue-700 px-4 md:px-0">
      <div className="w-full max-w-screen-2xl flex flex-col md:flex-row items-center md:items-stretch">
        {/* Instructions Section */}
        <div className="flex flex-col justify-center bg-blue-700 text-white p-12 md:p-16 w-full md:w-[45%] border border-blue-500 relative">
          <h2 className="text-3xl md:text-5xl font-[Fraunces] leading-snug tracking-tight text-left mb-10">
            {slides[currentIndex].title}
          </h2>
          <p className="text-base md:text-lg text-gray-200">
            {slides[currentIndex].description}
          </p>
          {/* Navigation Arrows */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between w-[50%] md:w-full">
            {currentIndex > 0 && (
              <button
                onClick={prevSlide}
                className="p-3 bg-yellow-400 rounded-full border border-blue-900"
              >
                <img src={left} alt="Previous" className="w-8 h-8" />
              </button>
            )}
            {currentIndex < slides.length - 1 && (
              <button
                onClick={nextSlide}
                className="p-3 bg-yellow-400 rounded-full border border-blue-900"
              >
                <img src={right} alt="Next" className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
        {/* Visuals Section */}
        <div className="flex justify-center items-center bg-white border border-blue-500 p-12 md:p-[7.5rem_8.25rem] w-full md:w-[55%] overflow-hidden relative">
          <img
            className="max-w-[25rem] md:max-w-[30rem] h-auto"
            src={slides[currentIndex].image}
            alt="slide"
          />
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
