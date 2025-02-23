import { useState } from 'react';
import img2 from '../../assets/images/img2.png';
import img5 from '../../assets/images/img1.png';
import img6 from '../../assets/images/snapshot.png';
import right from '../../assets/icons/arrow-right.svg';
import left from '../../assets/icons/arrow-left.svg';

const slides = [
  {
    title: 'Showcase your skills',
    description: (
      <>
        Choose 5 of your top skills from three categories: Technical Skills,
        Personality, and Professional Development. This is your chance to show
        what makes you stand out! Based on these skills, we’ll generate
        questions just for you.
      </>
    ),
    image: img2,
  },
  {
    title: 'Questionnaire',
    description:
      'Answer the 5 generated questions in 200 characters or less. Each question relates to one of your selected skills. You can also add a photo or any extra skills to make your answers even more personal and meaningful.',
    image: img5,
  },
  {
    title: 'Generate Snapshot',
    description:
      'All done - Here’s your snapshot! This exportable snapshot showcases your skills, personality, and strengths in a way that makes you stand out from other job seekers, giving you an edge in the competitive job market.',
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
    <div className="w-full h-[75vh] md:h-[80vh] flex flex-shrink-0 relative overflow-hidden px-4 md:px-0">
      <div
        className="w-full max-w-screen-2xl flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row items-center md:items-stretch flex-shrink-0"
          >
            {/* Desktop & Tablet Styling */}
            <div className="hidden md:flex flex-col justify-center bg-blue-700 text-white p-12 md:p-16 w-full md:w-[45%]">
              <h2 className="text-4xl md:text-5xl font-[Fraunces] leading-snug tracking-tight text-left mb-10">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg text-gray-200 font-light">
                {slide.description}
              </p>
              {/* Desktop/Tablet Navigation Arrows */}
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
            <div className="hidden md:flex justify-center items-center bg-white border border-blue-500 p-12 md:p-[7.5rem_8.25rem] w-full md:w-[55%]">
              <img
                className="max-w-[25rem] md:max-w-[30rem] h-auto object-contain"
                src={slide.image}
                alt="slide"
              />
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col w-full h-full bg-blue-700 text-white p-6 relative">
              {/* Title */}
              <h2 className="text-2xl font-Fraunces leading-snug tracking-tight text-left mb-4">
                {slide.title}
              </h2>
              {/* Description */}
              <p className="text-sm text-gray-200 text-left mb-6">
                {slide.description}
              </p>
              {/* Image */}
              <div className="flex justify-center items-center rounded-lg">
                <img
                  className="h-auto max-h-72 w-auto max-w-full rounded-[20px] object-contain"
                  src={slide.image}
                  alt="slide"
                />
              </div>

              {/* Navigation Arrows - Now Fully Visible & Functional */}
              <div className="flex justify-between items-center w-full absolute bottom-6 left-0 right-0 px-6">
                {currentIndex > 0 && (
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-yellow-400 rounded-full border border-blue-900"
                  >
                    <img src={left} alt="Previous" className="w-6 h-6" />
                  </button>
                )}
                <div className="flex-1"></div>
                {currentIndex < slides.length - 1 && (
                  <button
                    onClick={nextSlide}
                    className="p-3 bg-yellow-400 rounded-full border border-blue-900"
                  >
                    <img src={right} alt="Next" className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorial;
