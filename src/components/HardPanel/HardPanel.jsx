import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function HardPanel() {
  const hardskills = [
    { name: 'C++', bar: 'w-[85%]' },
    { name: 'Java', bar: 'w-[70%]' },
    { name: 'HTML', bar: 'w-[25%]' },
  ];

  return (
    <>
      <Card className="profile__hard-skills w-full mt-[1rem] rounded-[1.5rem] h-[13.75rem]">
        <CardHeader>
          <CardTitle className="profile__card-title text-[1.5rem]">
            Hard Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-[0.6rem]">
          {hardskills.map(function (skill) {
            return (
              <div
                className="profile__skill-bar flex flex-row"
                key={skill.name}
              >
                <p className="profile__skill-name text-xs w-[15%] font-semibold">
                  {skill.name}
                </p>
                <div
                  className={
                    'profile__skill-slider bg-amber-400 h-[0.75rem] rounded-[3px] border border-b-2 border-r-2 border-card-foreground self-center ' +
                    skill.bar
                  }
                ></div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}

export default HardPanel;
