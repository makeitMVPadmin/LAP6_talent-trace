/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

function SnapBox({ content }) {
  return (
    <>
      <div className="snapshot__box flex flex-col m-[38px] xl:mx-[23px] xl:mt-[20px] gap-[22px] text-card-foreground">
        <div className="snapshot__media max-xl:hidden flex flex-row justify-center">
          <img
            src={content.image}
            className="snapshot__img h-[121px] w-[243px] rounded-[10px] border border-secondary object-cover"
          />
        </div>
        <div className="snapshot__body flex flex-col gap-[0.5rem]">
          <h5 className="snapshot__heading font-serif font-semibold">
            {content.question.question}
          </h5>
          <p className="snapshot__text font-sans text-[0.75rem] font-medium">
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
    </>
  );
}

export default SnapBox;
