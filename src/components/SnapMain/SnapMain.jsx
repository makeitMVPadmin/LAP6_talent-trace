/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import image from '../../assets/images/Ellipse.png';

function SnapMain({ id, badges, content }) {
  return (
    <>
      <div className="snapshot__center max-xl:hidden flex-1 bg-[url('/src/assets/images/snapshot_center_frame_3.png')] bg-no-repeat bg-center flex flex-col justify-between items-center">
        {/* Center Top Box */}
        <div className="snapshot__top w-[508px] h-[240px] mt-[32px] pt-[15px] px-[45px] flex flex-col items-center">
          <h1 className="snapshot__name font-serif text-[28px] pt-[32px] text-card-foreground font-semibold">
            {id[0].firstName + ' ' + id[0].lastName}
          </h1>
          <h3 className="snapshot__role font-serif text-[20px] pt-[15px] text-card-foreground font-semibold">
            {id[0].discipline}
          </h3>
          <div className="snapshot__skills--all flex flex-row gap-[6px] w-[380px] pt-[32px] justify-center flex-wrap">
            {badges.map(function (skill) {
              return (
                <div
                  key={skill.id}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '500px',
                    borderTop: '1px solid #003660',
                    borderLeft: '1px solid #003660',
                    borderRight: '1px solid #003660',
                    borderBottom: '2.5px solid #003660',
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'rgba(255, 193, 60, 0.75)',
                    color: '#003660',
                    textAlign: 'center',
                    minWidth: '119px',
                    height: '33px',
                    cursor: 'pointer',
                  }}
                >
                  {skill.skillName}
                </div>
              );
            })}
          </div>
        </div>
        {/* Avatar Box  */}
        <div className="relative flex h-[260px] w-[260px] shrink-0 overflow-hidden rounded-full mt-[10px]">
          {image ? (
            <img
              src={id[0].profilePhoto}
              alt="Avatar"
              className="aspect-square h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium">
              CN
            </div>
          )}
        </div>
        {/* Center Bottom Box */}
        <div className="snapshot__bot w-[520px] h-[240px] mb-[25px] pb-[20px] px-[37px] flex flex-col text-card-foreground">
          <div className="snapshot__bot-header">
            <h2 className="snapshot__heading font-serif font-semibold text-lg">
              {content.question.question}
            </h2>
          </div>
          <div className="snapshot__bot-main flex flex-row pt-[10px] pb-[16px] gap-[20px]">
            <p className="snapshot__text font-sans text-[0.625rem] font-medium flex-1">
              {content.answer}
            </p>
            <div className="snapshot__media w-[240px]">
              <img
                src={content.image}
                className="snapshot__img h-[118px] w-[240px] rounded-[10px] border border-black object-cover"
              />
            </div>
          </div>
          <div className="snapshot__skills flex flex-row gap-[9px]">
            {content.relatedSkills.map(function (skill) {
              return (
                <div
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '500px',
                    borderTop: '0.5px solid #003660',
                    borderLeft: '0.5px solid #003660',
                    borderRight: '0.5px solid #003660',
                    borderBottom: '1.5px solid #003660',
                    padding: '2px 10px',
                    fontSize: '10px',
                    fontWeight: '500',
                    backgroundColor: 'rgba(255, 193, 60, 0.75)',
                    color: '#0F172A',
                    textAlign: 'center',
                    height: '20px',
                    cursor: 'pointer',
                  }}
                >
                  {skill.length <= 10 ? skill : skill.slice(10)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapMain;
