import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function HardPanel() {
  const hardskills = [
    { name: 'C++', bar: 'w-[85%]' },
    { name: 'Java', bar: 'w-[70%]' },
    { name: 'HTML', bar: 'w-[25%]' },
  ];

  return (
    <>
      <Card className="profile__hard-skills w-full mt-[1rem] rounded-[1.5rem] xl:h-[13.75rem] border-b-[3px] border-r-[3px] xl:border-b-[5px] xl:border-r-[5px]">
        <CardHeader className="max-xl:pt-4 max-xl:px-4 max-xl:pb-4">
          <CardTitle className="profile__card-title text-sm xl:text-[1.5rem]">
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
                <p className="profile__skill-name text-[0.625rem] xl:text-xs w-[15%] font-semibold">
                  {skill.name}
                </p>
                <div
                  className={
                    'profile__skill-slider bg-[#FFCC52] h-[0.5rem] xl:h-[0.75rem] rounded-[3px] border border-b-2 border-r-2 border-card-foreground self-center ' +
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
