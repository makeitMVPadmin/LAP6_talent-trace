/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import image from '../../assets/images/Ellipse.png';

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
                <div
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '500px',
                    borderTop: '1px solid #003660',
                    borderLeft: '1px solid #003660',
                    borderRight: '1px solid #003660',
                    borderBottom: '2.5px solid #003660',
                    padding: '4px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: '#FACC15',
                    color: '#1E293B',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    minWidth: '119px',
                    height: '33px',
                    cursor: 'pointer',
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        {/* Avatar Box  */}
        <div className="relative flex h-[234px] w-[234px] shrink-0 overflow-hidden rounded-full">
          {image ? (
            <img
              src={image}
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
                <div
                  key={badge}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '500px',
                    borderTop: '1px solid #003660',
                    borderLeft: '1px solid #003660',
                    borderRight: '1px solid #003660',
                    borderBottom: '2.5px solid #003660',
                    padding: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'rgba(255, 193, 60, 0.75)',
                    color: '#1E293B',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    minWidth: '110px',
                    height: '30px',
                    cursor: 'pointer',
                  }}
                >
                  {badge}
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
