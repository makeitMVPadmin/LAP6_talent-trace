import { Button } from '@/components/ui/button';
import people from '@/assets/images/3_people.png';
import question1 from '@/assets/images/questions_page.png';
import girlinglasses from '@/assets/images/girl_in_glasses.png';
import question2 from '@/assets/images/questions_page_2.png';
import girlinwhite from '@/assets/images/girl_in_white_girl.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <main className="flex items-center gap-12 px-12 md:px-6 justify-center  ">
        <div className="space-y-4  w-[400] ">
          <h1 className="hero text-4xl ">Capture Your Skills in a Snapshot</h1>
          <p className="hero__description font-light">
            Transform your professional journey into a compelling snapshot.{' '}
            <br />
            Showcase your skills and achievements effortlessly, making it easier
            for employers to see your value.
          </p>
          <div className="flex gap-4">
            <Link to="/users/:userid/CreateSnapshot">
              <Button variant="secondary" className="shadow-lg">
                Start
              </Button>
            </Link>

            <Button variant="outline " className="shadow-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:flex   justify-center items-center gap-4 ">
          <div className="  space-y-4">
            <img src={people} alt="There are 3 people staring at the camera" />
            <img className="" src={question1} alt="A question sample." />
            <img className="" src={girlinglasses} alt="A lady in glasses" />
          </div>
          <div className=" space-y-4">
            <img
              className=" rounded-lg"
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

export default Hero;
