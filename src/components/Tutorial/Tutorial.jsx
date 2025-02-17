import './Tutorial.scss';
import img1 from '../../assets/images/img1.svg';
import right from '../../assets/icons/arrow-right.svg';

function Tutorial() {
  return (
    <div className="tutorial">
      <div className="tutorial__instructions">
        <h2 className="tutorial__instructions-title">Showcase your skills</h2>
        <p className="tutorial__instructions-description">
          Our Snapshots are designed to showcase your story, helping you stand
          out and build connections through three key categories:
          <span className="highlighted-text"> Technical Skills</span>,
          <span className="highlighted-text"> Personality</span>, and
          <span className="highlighted-text"> Professional Development</span>.
        </p>

        <img className="tutorial__arrow" src={right} alt="right arrow" />
      </div>
      <div className="tutorial__visuals">
        <img
          className="tutorial__visuals-sample"
          src={img1}
          alt="sample image"
        />
      </div>
    </div>
  );
}

export default Tutorial;
