import { useState } from 'react';
import img2 from '../../assets/images/img2.svg';
import img5 from '../../assets/images/tutorial.svg';
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
      "Based on the skills and categories you select, personalized questions will be generated for you. You'll have the opportunity to answer each question in under 200 characters, allowing you to showcase your skills concisely. These responses will shape your Snapshot, which is designed to highlight both your expertise and personality.",
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
    <div className="w-full h-[80vh] flex flex-shrink-0 relative overflow-hidden bg-blue-700 px-4 md:px-0">
      <div
        className="w-full max-w-screen-2xl flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row items-center md:items-stretch flex-shrink-0"
          >
            {/* Instructions Section */}
            <div className="flex flex-col justify-center bg-blue-700 text-white p-12 md:p-16 w-full md:w-[45%] relative">
              <h2 className="text-3xl md:text-5xl font-serif leading-snug tracking-tight text-left mb-10">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg text-gray-200">
                {slide.description}
              </p>
              {/* Navigation Arrows Inside Instructions Section */}
              <div className="flex justify-between w-full mt-8">
                {currentIndex > 0 ? (
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-yellow-400 rounded-full border border-blue-900"
                  >
                    <img src={left} alt="Previous" className="w-8 h-8" />
                  </button>
                ) : (
                  <div className="w-14"></div>
                )}
                {currentIndex < slides.length - 1 ? (
                  <button
                    onClick={nextSlide}
                    className="p-3 bg-yellow-400 rounded-full border border-blue-900"
                  >
                    <img src={right} alt="Next" className="w-8 h-8" />
                  </button>
                ) : (
                  <div className="w-14"></div>
                )}
              </div>
            </div>
            {/* Visuals Section */}
            <div className="flex justify-center items-center bg-white border border-blue-500 p-12 md:p-[7.5rem_8.25rem] w-full md:w-[55%] relative">
              <img
                className="max-w-[25rem] md:max-w-[30rem] h-auto object-contain"
                src={slide.image}
                alt="slide"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorial;
