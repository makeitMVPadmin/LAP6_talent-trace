/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import { Badge } from '@/components/ui/badge';

function SnapBox({ content }) {
  return (
    <>
      <div className="snapshot__box flex flex-col mx-[10px] mt-[9px] mb-[11px] text-card-foreground">
        <h5 className="snapshot__heading font-serif mt-[22px] mx-[20px] font-semibold">
          {content.question.question}
        </h5>
        <p className="snapshot__text font-sans text-xs mx-[20px] mt-[9px] font-medium">
          {content.answer}
        </p>
        <div className="snapshot__media my-[22px] flex flex-row justify-center">
          <img
            src={content.image}
            className="snapshot__img h-[118px] w-[249px] rounded-[10px] border border-black object-cove"
          />
        </div>
        <div className="snapshot__skills mx-[20px] flex flex-row flex-wrap gap-[9px]">
          {content.relatedSkills.map(function (skill) {
            return (
              <Badge
                className="snapshot__badge text-xs h-[20px] border-b"
                key={skill}
              >
                Test
              </Badge>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SnapBox;
