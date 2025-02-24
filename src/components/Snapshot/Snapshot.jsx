import './Snapshot.css';
import SnapMain from '../SnapMain/SnapMain';
import SnapBox from '../SnapBox/SnapBox';
import { useCard } from '../../context/SnapshotContext';

function Snapshot() {
  const info = useCard().card;

  const folio = {
    name: 'Dianne Surname',
    role: 'UX/UI Designer',
    skills: [
      'Communicative',
      'Analytical',
      'Collaborative',
      'Adaptable',
      'Fast Learner',
    ],
  };

  // const data = [
  //   {
  //     question:
  //       'Building Sleek, User-Friendly Websites that Work on Any Device',
  //     answer:
  //       'I use flexible layouts and media queries to ensure the site adapts seamlessly across devices. Accessibility is key—so I prioritize clear navigation and screen-reader compatibility for all users.',
  //     image: 'css_grid_1.png',
  //     badges: ['CSS Grid', 'WCAG'],
  //   },
  //   {
  //     question: 'Maintaining Smooth Performance in Complex Backend Development',
  //     answer:
  //       'I optimise performance by streamlining database queries and using caching tools like Redis to speed up repetitive tasks. For scalability, I implement load balancing and monitor performance metrics regularly.',
  //     image: 'redis_3.jpg',
  //     badges: ['SQL', 'Redis/Memcahced'],
  //   },
  //   {
  //     question: 'How I Stay on Top of My To-Do List When Time is Running Out',
  //     answer:
  //       'I break tasks into smaller, manageable chunks using Kanban boards like Trello to visualize my workflow. I prioritize high-impact tasks first and allocate specific time blocks for focus work.',
  //     image: 'trello.png',
  //     badges: ['Trello', 'Prioritzation'],
  //   },
  //   {
  //     question: 'Staying Agile When a Project Takes an Unexpected Turn',
  //     answer:
  //       'I stay agile and quickly reassess the scope. Daily stand-ups with the team help ensure everyone is on the same page. I adapt my workflow, re-prioritise tasks, and communicate changes clearly.',
  //     image: 'agile.png',
  //     badges: ['Agile', 'Communicative'],
  //   },
  //   {
  //     question: 'Using data to make developmental decisions',
  //     answer:
  //       'I dive into user behavior data from Google Analytics and run A/B tests to measure feature effectiveness. The data helps me identify areas for improvement and adjust features to solve user pain points.',
  //     image: 'tableau.png',
  //     badges: ['A/B Testing', 'Tableau'],
  //   },
  // ];

  try {
    return (
      <div className="snapshot h-[900px] w-[1200px] border border-b-2 border-r-2 border-slate-300 rounded-[20px] flex flex-row justify-between bg-primary">
        {/* Left Column */}
        <div className="snapshot__left ml-[22px] flex flex-col justify-center">
          {/* Left Top Box */}
          <div className="snapshot__frame h-[406px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_2.png')] flex flex-col">
            <SnapBox content={info.answers[0]} />
          </div>
          {/* Left Bottom Box */}
          <div className="snapshot__frame h-[416px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_3.png')] flex flex-col">
            <SnapBox content={info.answers[1]} />
          </div>
        </div>
        {/* Center Columns */}
        <SnapMain id={folio} badges={info.skills} content={info.answers[2]} />
        {/* Right Column  */}
        <div className="snapshot__right mr-[22px] flex flex-col justify-center">
          {/* Right Top Box */}
          <div className="snapshot__frame h-[406px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_2.png')] flex flex-col">
            <SnapBox content={info.answers[3]} />
          </div>
          {/* Right Bottom Box */}
          <div className="snapshot__frame h-[416px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_3.png')] flex flex-col">
            <SnapBox content={info.answers[4]} />
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Snapshot;
