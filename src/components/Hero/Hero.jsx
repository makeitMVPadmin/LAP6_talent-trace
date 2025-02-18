import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <>
      {' '}
      <h1 className="hero">Capture Your Skills in a Snapshot</h1>
      <p className="hero__description">
        Transform your professional journey into a compelling snapshot. <br />
        Showcase your skills and achievements effortlessly, making it easier for
        employers to see your value.
      </p>
      <Button>Start</Button>
      <Button>Learn More</Button>
    </>
  );
}

export default Hero;
