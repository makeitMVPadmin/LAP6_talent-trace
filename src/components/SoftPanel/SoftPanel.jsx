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
    'Attentative',
  ];

  return (
    <>
      <Card className="profile__soft-skills w-full mt-[1rem] rounded-[1.5rem] h-[13.75rem]">
        <CardHeader>
          <CardTitle className="profile__card-title text-[1.5rem]">
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap gap-[0.375rem] px-0 justify-center">
          {softskills.map(function (skill) {
            return (
              <Badge
                key={skill}
                className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center"
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
