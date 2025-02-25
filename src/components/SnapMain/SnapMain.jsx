/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function SnapMain({ id, content }) {
  return (
    <>
      <div className="snapshot__center flex-1 bg-[url('/src/assets/images/snapshot_center_frame_2.png')] bg-no-repeat bg-center flex flex-col justify-between items-center">
        {/* Center Top Box */}
        <div className="snapshot__top w-[508px] h-[240px] mt-[32px] pt-[15px] px-[45px] flex flex-col items-center">
          <h1 className="snapshot__name font-serif text-[28px] pt-[32px] text-card-foreground font-semibold">
            {id.name}
          </h1>
          <h3 className="snapshot__role font-serif text-[20px] pt-[15px] text-card-foreground font-semibold">
            {id.role}
          </h3>
          <div className="snapshot__skills--all flex flex-row gap-[6px] w-[380px] pt-[32px] justify-center flex-wrap">
            {id.skills.map(function (skill) {
              return (
                <Badge
                  className="snapshot__badge text-xs w-[119px] h-[33px] px-[10px] py-[4px] justify-center"
                  key={skill}
                >
                  {skill}
                </Badge>
              );
            })}
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
              {content.question}
            </h2>
          </div>
          <div className="snapshot__bot-main flex flex-row py-[9px] gap-[20px]">
            <p className="snapshot__text font-sans text-xs font-medium flex-1">
              {content.answer}
            </p>
            <div className="snapshot__media w-[240px]">
              <img
                src={'/src/assets/images/' + content.image}
                className="snapshot__img h-[118px] w-[240px] rounded-[10px] border border-black"
              />
            </div>
          </div>
          <div className="snapshot__skills flex flex-row gap-[9px]">
            {content.badges.map(function (badge) {
              return (
                <Badge
                  className="snapshot__badge text-xs h-[20px] border-b"
                  key={badge}
                >
                  {badge}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapMain;
