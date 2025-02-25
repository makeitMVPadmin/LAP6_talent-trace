import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

function SoftPanel() {
  const softskills = [
    'Communicative',
    'Analytical',
    'Collaborative',
    'Fast Learner',
    'Adaptable',
    'Critical Thinker',
    'Accountable',
    'Attentive',
  ];

  return (
    <>
      <Card className="profile__soft-skills w-full mt-[1rem] rounded-[1.5rem] xl:h-[13.75rem]">
        <CardHeader className="max-xl:pt-4 max-xl:px-4 max-xl:pb-1">
          <CardTitle className="profile__card-title text-sm xl:text-[1.5rem]">
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap gap-[0.375rem] px-0 max-xl:pb-5 justify-center">
          {softskills.map(function (skill) {
            return (
              <Badge
                key={skill}
                className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[1.25rem] w-[6rem] xl:h-[2rem] xl:w-[7.5rem] max-xl:text-[0.625rem] flex justify-center"
              >
                {skill}
              </Badge>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}

export default SoftPanel;
