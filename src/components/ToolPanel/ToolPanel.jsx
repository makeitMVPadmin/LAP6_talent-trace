/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import logoFigma from '../../assets/icons/logo_figma.svg';
import logoPhotoshop from '../../assets/icons/logo_photoshop.svg';
import logoIllustrator from '../../assets/icons/logo_illustrator.svg';
import logoPremiere from '../../assets/icons/logo_premiere.svg';
import logoNotion from '../../assets/icons/logo_notion.svg';
import logoMeet from '../../assets/icons/logo_meet.svg';

function ToolPanel({ name }) {
  const tools = [
    logoFigma,
    logoPhotoshop,
    logoIllustrator,
    logoPremiere,
    logoNotion,
    logoMeet,
  ];

  return (
    <>
      <Card className="profile__tools w-full mt-[1rem] pb-[1.5rem] rounded-[1.5rem] xl:h-[13.75rem]">
        <CardHeader>
          <CardTitle className="profile__card-title text-sm xl:text-[1.5rem]">
            {name}
          </CardTitle>
        </CardHeader>
        <div className="profile__tools-bar flex flex-row justify-evenly">
          <div className="profile__tools-left flex flex-col items-center -mt-[1.438rem]">
            <Badge
              className="profile__tools-badge text-white rounded-[500px] relative top-3"
              variant="secondary"
            >
              Code
            </Badge>
            <Card className="profile__code bg-primary border-card-foreground w-[8.75rem] h-[3.125rem] xl:w-[13.5rem] xl:h-[6.5rem] rounded-[1.25rem] flex justify-center items-center border-b-4">
              <CardContent className="flex flex-row gap-[0.5rem] xl:gap-[0.75rem] max-xl:px-2 flex-wrap py-0">
                {tools.map(function (tool) {
                  return (
                    <img
                      src={tool}
                      className="profile__icon max-xl:h-[10px]"
                      key={tool}
                    />
                  );
                })}
              </CardContent>
            </Card>
          </div>
          <div className="profile__tools-right flex flex-col items-center -mt-[1.438rem]">
            <Badge
              className="profile__tools-badge text-white rounded-[500px] relative top-3"
              variant="secondary"
            >
              Design
            </Badge>
            <Card className="profile__design bg-primary border-card-foreground w-[8.75rem] h-[3.125rem] xl:w-[13.5rem] xl:h-[6.5rem] rounded-[1.25rem] flex justify-center items-center border-b-4">
              <CardContent className="flex flex-row gap-[0.5rem] xl:gap-[0.75rem] max-xl:px-2 flex-wrap py-0">
                {tools.map(function (tool) {
                  return (
                    <img
                      src={tool}
                      className="profile__icon max-xl:h-[10px]"
                      key={tool}
                    />
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ToolPanel;
