/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import image from '../../assets/images/Ellipse.png';

function SnapHead({ id, badges, content }) {
  return (
    <>
      <div className="snapshot__head flex flex-col gap-[20px] xl:hidden">
        {/* Intro Card  */}
        <div className="snapshot__header w-[353px] bg-[#FFF1C5] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col items-center">
          <h1 className="snapshot__name font-serif text-[24px] pt-[24px] text-card-foreground font-semibold">
            {id[0].firstName + ' ' + id[0].lastName}
          </h1>
          <h3 className="snapshot__role font-serif text-[16px] pt-[4px] text-card-foreground font-semibold">
            {id[0].discipline}
          </h3>
          <div className="relative flex h-[125px] w-[125px] shrink-0 overflow-hidden rounded-full mt-[24px]">
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
          <div className="snapshot__skills--all w-[300px] flex flex-row gap-[6px] pt-[32px] pb-[30px] justify-center flex-wrap">
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
                    fontSize: '10px',
                    fontWeight: '600',
                    backgroundColor: 'rgba(255, 193, 60, 0.75)',
                    color: '#003660',
                    textAlign: 'center',
                    height: '26px',
                    cursor: 'pointer',
                  }}
                >
                  {skill.skillName}
                </div>
              );
            })}
          </div>
        </div>
        {/* Answer Card  */}
        <div className="snapshot__frame w-[353px] bg-[#FFF1C5] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
          <div className="snapshot__box flex flex-col m-[38px] xl:mx-[23px] xl:mt-[20px] gap-[22px] xl:gap-[30px] text-card-foreground">
            <div className="snapshot__media max-xl:hidden flex flex-row justify-center">
              <img
                src={content.image}
                className="snapshot__img h-[121px] w-[243px] rounded-[10px] border border-secondary object-cover"
              />
            </div>
            <div className="snapshot__body flex flex-col gap-[0.5rem]">
              <h5 className="snapshot__heading font-serif font-semibold xl:text-lg">
                {content.question.question}
              </h5>
              <p className="snapshot__text font-sans text-[0.625rem] font-medium">
                {content.answer}
              </p>
            </div>
            <div className="snapshot__media xl:hidden flex flex-row justify-center">
              <img
                src={content.image}
                className="snapshot__img h-[118px] w-[272px] rounded-[10px] border border-secondary object-cover"
              />
            </div>
            <div className="snapshot__skills flex flex-row flex-wrap gap-[6px] overflow-hidden">
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
      </div>
    </>
  );
}

export default SnapHead;
