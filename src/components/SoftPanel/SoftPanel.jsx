import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import accountableIcon from '../../assets/images/accountable_icon.png';
import adaptableIcon from '../../assets/images/adaptable_icon.png';
import analyticalIcon from '../../assets/images/analytical_icon.png';
import attentativeIcon from '../../assets/images/attentative_icon.png';
import collaborativeIcon from '../../assets/images/collaborative_icon.png';
import communicativeIcon from '../../assets/images/communicative_icon.png';
import criticalIcon from '../../assets/images/critical-thinking_icon.png';
import fastIcon from '../../assets/images/fast-learner_icon.png';

function SoftPanel() {
  const softSkills = [
    {
      name: 'Communicative',
      img: communicativeIcon,
    },
    {
      name: 'Analytical',
      img: analyticalIcon,
    },
    {
      name: 'Collaborative',
      img: collaborativeIcon,
    },
    {
      name: 'Fast Learner',
      img: fastIcon,
    },
    {
      name: 'Adaptable',
      img: adaptableIcon,
    },
    {
      name: 'Critical Thinker',
      img: criticalIcon,
    },
    {
      name: 'Accountable',
      img: accountableIcon,
    },
    {
      name: 'Attentive',
      img: attentativeIcon,
    },
  ];

  return (
    <>
      <Card className="profile__soft-skills w-full mt-[1rem] rounded-[1.5rem] xl:min-h-[13.75rem] border-b-[3px] border-r-[3px] xl:border-b-[5px] xl:border-r-[5px]">
        <CardHeader className="max-xl:pt-4 max-xl:px-4 max-xl:pb-1">
          <CardTitle className="profile__card-title text-sm xl:text-[1.5rem]">
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap gap-[0.375rem] px-4 xl:px-6 max-xl:pb-5 max-xl:mt-[0.5rem] justify-center">
          {softSkills.map(function (skill) {
            return (
              <Badge
                key={skill.name}
                className="profile__skill-badge rounded-[500px] xl:mt-[0.5rem] h-[1.25rem] xl:h-[2rem] max-xl:text-[0.625rem] xl:px-[10px] xl:py-[7px] flex xl:gap-[10px] justify-center"
                variant="tertiary"
              >
                <img src={skill.img} className="profile__icon max-xl:hidden" />
                {skill.name}
              </Badge>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}

export default SoftPanel;
