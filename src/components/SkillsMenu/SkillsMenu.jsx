import { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import { Button } from '../ui/button';
import SelectSkills from '../SelectSkills/SelectSkills';
import { SelectedSkillsContext } from '@/context/SelectedSkillsContext';

function SkillsMenuCard({ onButtonClick }) {
  const { selectedSkills } = useContext(SelectedSkillsContext);

  return (
    <>
      <Card className="Skills_Menu flex flex-col bg-white w-full md:w-[38.813rem] h-auto md:h-full md:p-[3rem] border-white shadow-none md:rounded-[1.25rem] md:border-customBlue justify-center">
        <CardHeader>
          <CardTitle className="Skills_Menu-title w-[27.938rem] font-fraunces font-semibold pl-6 pr-6 md:pl-0 md:pr-0 text-[1.65rem] md:text-[1.75rem] leading-8 tracking-[0.016rem] text-customBlue">
            Setup your snapshot to standout
          </CardTitle>
          <CardDescription className="Skills_Menu-description text-base font-montserrat font-medium !text-customBlue leading-6 pl-6 pr-6 md:pl-0 md:pr-0">
            (Select 5 of your top skills)
          </CardDescription>
        </CardHeader>
        <CardContent className="Skills_Menu-content h-[90%] flex flex-col justify-center">
          <SelectSkills />
        </CardContent>
        <CardFooter className="Skills_Menu-footer flex justify-end pr-16 md:pr-0">
          <Button
            className={`Skills_Menu-button w-32 h-10 pl-6 pr-6 md:pl-4 md:pr-4 rounded-[0.625rem] border-t border-l border-r-2 border-b-4 border-customBlue justify-center items-center gap-2 inline-flex ${selectedSkills.length === 5 ? 'button-enabled' : 'button-disabled'} ${selectedSkills.length === 5 ? 'cursor-pointer' : 'cursor-not-allowed'} disabled:opacity-100`}
            variant="ghost"
            disabled={selectedSkills.length != 5}
            onClick={onButtonClick}
          >
            <div className="Skills_Menu-button-text text-center text-white text-[1.125rem] font-montserrat font-semibold leading-[1.625rem]">
              Next
            </div>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default SkillsMenuCard;
