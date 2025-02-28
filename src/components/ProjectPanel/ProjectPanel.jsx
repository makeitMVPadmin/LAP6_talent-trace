import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import currentProject from '../../assets/images/current_project.png';

function ProjectPanel() {
  return (
    <>
      <Card className="profile__current rounded-[1.5rem] px-[1rem] mt-[1rem] border-b-[3px] border-r-[3px] xl:border-b-[5px] xl:border-r-[5px]">
        <CardHeader className="profile__current-header font-serif font-semibold xl:text-[2.25rem] max-xl:p-4">
          What I’m currently working on...
        </CardHeader>
        <CardContent>
          <img
            src={currentProject}
            className="profile__current-image w-full object-cover h-[12rem] xl:h-[24rem] rounded-[1.5rem]"
          />
          <ul className="profile__current-details list-disc pl-4 pt-4 xl:pl-6 xl:pt-6">
            <li className="profile__current-list font-medium max-xl:text-xs">
              Development of internal projects from scratch, product design of
              brands
            </li>
            <li className="profile__current-list font-medium max-xl:text-xs">
              Landing page, web apps and hybrid app
            </li>
            <li className="profile__current-list font-medium max-xl:text-xs">
              Coordinating with outside agencies, art services, web designer,
              marketing, printers, and colleagues as necessary
            </li>
          </ul>
          <Badge className="profile__current-badge rounded-[500px] max-xl:text-[0.5rem] mt-4 xl:mt-6 xl:border-none shadow-none">
            Web Development
          </Badge>
        </CardContent>
      </Card>
    </>
  );
}

export default ProjectPanel;
