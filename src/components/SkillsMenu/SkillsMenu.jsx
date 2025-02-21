import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import SelectSkills from '../SelectSkills/SelectSkills';

function SkillsMenuCard() {
  return (
    <>
      <Card className="Skills_Menu flex flex-col bg-inherit w-[38.813rem] h-[60.188rem] p-[3rem] rounded-[1.25rem] border-customBlue">
        <CardHeader>
          <CardTitle className="Skills_Menu-title w-[27.938rem] font-fraunces font-semibold text-[1.75rem] leading-8 tracking-[0.016rem] text-customBlue">
            Setup your snapshot to standout
          </CardTitle>
          <CardDescription className="Skills_Menu-description text-base font-montserrat font-medium !text-customBlue leading-6">
            (Select up to 5 of your top skills)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[90%] flex flex-col justify-center">
          <SelectSkills />
        </CardContent>
        <CardFooter className="bg-purple-300"></CardFooter>
      </Card>
    </>
  );
}
export default SkillsMenuCard;
