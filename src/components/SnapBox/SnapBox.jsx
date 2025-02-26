/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

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
        <div className="snapshot__skills mx-[20px] flex flex-row flex-wrap gap-[9px] overflow-hidden">
          {content.relatedSkills.map(function (skill) {
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
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SnapBox;
