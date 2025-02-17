import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

function ProjectPanel() {
  return (
    <>
      <Card className="profile__current w-[50rem]   rounded-[1.5rem] px-[1rem] mt-[1rem]">
        <CardHeader className="profile__current-header font-serif font-semibold text-[2.25rem]">
          What I’m currently working on...
        </CardHeader>
        <CardContent>
          <img
            src="/src/assets/images/current_project.png"
            className="profile__current-image w-full object-cover h-[24rem] rounded-[1.5rem]"
          />
          <ul className="profile__current-details list-disc pl-6 pt-6">
            <li className="profile__current-list font-medium">
              Development of internal projects from scratch, product design of
              brands
            </li>
            <li className="profile__current-list font-medium">
              Landing page, web apps and hybrid app
            </li>
            <li className="profile__current-list font-medium">
              Coordinating with outside agencies, art services, web designer,
              marketing, printers, and colleagues as necessary
            </li>
          </ul>
          <Badge className="profile__current-badge rounded-[500px] mt-6 border-none shadow-none">
            Badge
          </Badge>
        </CardContent>
      </Card>
    </>
  );
}

export default ProjectPanel;
