import './Snapshot.css';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function Snapshot() {
  return (
    <div className="snapshot h-[900px] w-[1200px] border border-b-2 border-r-2 border-slate-300 rounded-[20px] flex flex-row justify-between bg-primary">
      {/* Left Column */}
      <div className="snapshot__left ml-[22px] flex flex-col justify-center">
        {/* Left Top Box */}
        <div className="snapshot__frame h-[406px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_2.png')] flex flex-col">
          <div className="snapshot__box flex flex-col mx-[10px] mt-[9px] mb-[11px] text-card-foreground">
            <h5 className="snapshot__heading font-serif mt-[22px] mx-[20px] font-semibold">
              Building Sleek, User-Friendly Websites that Work on Any Device
            </h5>
            <p className="snapshot__text font-sans text-xs mx-[20px] mt-[9px] font-medium">
              I use flexible layouts and media queries to ensure the site adapts
              seamlessly across devices. Accessibility is key—so I prioritize
              clear navigation and screen-reader compatibility for all users.
            </p>
            <div className="snapshot__media my-[22px] flex flex-row justify-center">
              <img
                src="/src/assets/images/css_grid_1.png"
                className="snapshot__img h-[118px] w-[249px] rounded-[10px] border border-black object-cove"
              />
            </div>
            <div className="snapshot__skills mx-[20px] flex flex-row gap-[9px]">
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                CSS Grid
              </Badge>
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                WCAG
              </Badge>
            </div>
          </div>
        </div>
        {/* Left Bottom Box */}
        <div className="snapshot__frame h-[416px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_3.png')] flex flex-col">
          <div className="snapshot__box flex flex-col mx-[10px] mt-[9px] mb-[11px] text-card-foreground">
            <h5 className="snapshot__heading font-serif mt-[22px] mx-[20px] font-semibold">
              Maintaining Smooth Performance in Complex Backend Development
            </h5>
            <p className="snapshot__text font-sans text-xs mx-[20px] mt-[9px] font-medium">
              I optimise performance by streamlining database queries and using
              caching tools like Redis to speed up repetitive tasks. For
              scalability, I implement load balancing and monitor performance
              metrics regularly.
            </p>
            <div className="snapshot__media my-[22px] flex flex-row justify-center">
              <img
                src="/src/assets/images/redis_3.jpg"
                className="snapshot__img h-[118px] w-[249px] rounded-[10px] border border-black object-cover"
              />
            </div>
            <div className="snapshot__skills mx-[20px] flex flex-row gap-[9px]">
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                SQL
              </Badge>
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                Redis/Memcahced
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {/* Center Columns */}
      <div className="snapshot__center flex-1 bg-[url('/src/assets/images/snapshot_center_frame_2.png')] bg-no-repeat bg-center flex flex-col justify-between items-center">
        {/* Center Top Box */}
        <div className="snapshot__top w-[508px] h-[240px] mt-[32px] pt-[15px] px-[45px] flex flex-col items-center">
          <h1 className="snapshot__name font-serif text-[28px] pt-[32px] text-card-foreground font-semibold">
            Dianne Surname
          </h1>
          <h3 className="snapshot__role font-serif text-[20px] pt-[15px] text-card-foreground font-semibold">
            UX/UI Designer
          </h3>
          <div className="snapshot__skills--all flex flex-row gap-[6px] w-[380px] pt-[32px] justify-center flex-wrap">
            <Badge className="snapshot__badge text-xs w-[119px] h-[33px] px-[10px] py-[4px] justify-center">
              Communicative
            </Badge>
            <Badge className="snapshot__badge text-xs w-[119px] h-[33px] px-[10px] py-[4px] justify-center">
              Analytical
            </Badge>
            <Badge className="snapshot__badge text-xs w-[119px] h-[33px] px-[10px] py-[4px] justify-center">
              Collaborative
            </Badge>
            <Badge className="snapshot__badge text-xs w-[119px] h-[33px] px-[10px] py-[4px] justify-center">
              Adaptable
            </Badge>
            <Badge className="snapshot__badge text-xs w-[119px] h-[33px] px-[10px] py-[4px] justify-center">
              Fast Learner
            </Badge>
          </div>
        </div>
        {/* Avatar Box  */}
        <Avatar className="snapshot__avatar h-[234px] w-[234px]">
          <AvatarImage
            src="/src/assets/images/flower_girl.png"
            className="object-cover"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* Center Bottom Box */}
        <div className="snapshot__bot w-[508px] h-[240px] mb-[32px] pb-[15px] px-[27px] flex flex-col text-card-foreground">
          <div className="snapshot__bot-header">
            <h2 className="snapshot__heading font-serif font-semibold">
              How I Stay on Top of My To-Do List When Time is Running Out
            </h2>
          </div>
          <div className="snapshot__bot-main flex flex-row py-[9px] gap-[20px]">
            <p className="snapshot__text font-sans text-xs font-medium flex-1">
              I break tasks into smaller, manageable chunks using Kanban boards
              like Trello to visualize my workflow. I prioritize high-impact
              tasks first and allocate specific time blocks for focus work.
            </p>
            <div className="snapshot__media w-[240px]">
              <img
                src="/src/assets/images/trello.png"
                className="snapshot__img h-[118px] w-[240px] rounded-[10px] border border-black"
              />
            </div>
          </div>
          <div className="snapshot__skills flex flex-row gap-[9px]">
            <Badge className="snapshot__badge text-xs h-[20px] border-b">
              Trello
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] border-b">
              Prioritization
            </Badge>
          </div>
        </div>
      </div>
      {/* Right Column  */}
      <div className="snapshot__right mr-[22px] flex flex-col justify-center">
        {/* Right Top Box */}
        <div className="snapshot__frame h-[406px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_2.png')] flex flex-col">
          <div className="snapshot__box flex flex-col mx-[10px] mt-[9px] mb-[11px] text-card-foreground">
            <h5 className="snapshot__heading font-serif mt-[22px] mx-[20px] font-semibold">
              Staying Agile When a Project Takes an Unexpected Turn
            </h5>
            <p className="snapshot__text font-sans text-xs mx-[20px] mt-[9px] font-medium">
              I stay agile and quickly reassess the scope. Daily stand-ups with
              the team help ensure everyone is on the same page. I adapt my
              workflow, re-prioritise tasks, and communicate changes clearly.
            </p>
            <div className="snapshot__media my-[22px] flex flex-row justify-center">
              <img
                src="/src/assets/images/agile.png"
                className="snapshot__img h-[118px] w-[249px] rounded-[10px] border border-black object-cover"
              />
            </div>
            <div className="snapshot__skills mx-[20px] flex flex-row gap-[9px]">
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                Agile
              </Badge>
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                Communicative
              </Badge>
            </div>
          </div>
        </div>
        {/* Right Bottom Box */}
        <div className="snapshot__frame h-[416px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_3.png')] flex flex-col">
          <div className="snapshot__box flex flex-col mx-[10px] mt-[9px] mb-[11px] text-card-foreground">
            <h5 className="snapshot__heading font-serif mt-[22px] mx-[20px] font-semibold">
              Using data to make developmental decisions
            </h5>
            <p className="snapshot__text font-sans text-xs mx-[20px] mt-[9px] font-medium">
              I dive into user behavior data from Google Analytics and run A/B
              tests to measure feature effectiveness. The data helps me identify
              areas for improvement and adjust features to solve user pain
              points.
            </p>
            <div className="snapshot__media my-[22px] flex flex-row justify-center">
              <img
                src="/src/assets/images/tableau.png"
                className="snapshot__img h-[118px] w-[249px] rounded-[10px] border border-secondary"
              />
            </div>
            <div className="snapshot__skills mx-[20px] flex flex-row gap-[9px]">
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                A/B Testing
              </Badge>
              <Badge className="snapshot__badge text-xs h-[20px] border-b">
                Tableau
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snapshot;
