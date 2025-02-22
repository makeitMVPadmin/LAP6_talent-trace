import { Button } from '@/components/ui/button';
import people from '@/assets/images/3_people.png';
import question1 from '@/assets/images/questions_page.jpg';
import girlinglasses from '@/assets/images/girl_in_glasses.png';
import question2 from '@/assets/images/questions_page_2.jpg';
import girlinwhite from '@/assets/images/girl_in_white_girl.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Hero({ scrollToTarget }) {
  return (
    <>
      <main className="flex items-center gap-12 px-12 md:px-6 justify-center  ">
        <div className="space-y-4 p-10 w-[400] ">
          <h1 className="hero font-[Fraunces] leading-snug text-customBlue text-5xl ">
            Capture Your Skills in a Snapshot
          </h1>
          <p className="hero__description text-customBlue font-light">
            Transform your professional journey into a compelling snapshot.{' '}
            <br />
            Showcase your skills and achievements effortlessly, making it easier
            for employers to see your value.
          </p>
          <div className="flex gap-4">
            <Link to="/users/:userid/CreateSnapshot">
              <Button variant="secondary" className="shadow-lg bg-blue  ">
                Start
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={scrollToTarget}
              className="shadow-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:flex   justify-center items-center gap-4 ">
          <div className="  space-y-4">
            <img src={people} alt="There are 3 people staring at the camera" />
            <img
              className="h-80 w-80
            "
              src={question1}
              alt="A question sample."
            />
            <img className="" src={girlinglasses} alt="A lady in glasses" />
          </div>
          <div className=" space-y-4">
            <img
              className=" rounded-lg h-80 w-80border-black"
              src={question2}
              alt="A question sample"
            />
            <img
              className=""
              src={girlinwhite}
              alt="A lady wearing a white shirt"
            />
          </div>
        </div>
      </main>
    </>
  );
}

Hero.propTypes = {
  scrollToTarget: PropTypes.func.isRequired,
};

export default Hero;
