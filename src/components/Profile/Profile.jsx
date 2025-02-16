import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

function Profile() {
  return (
    <>
      <div className="profile flex flex-row justify-center gap-[2rem] py-[4rem]">
        <div className="profile__left w-[33rem]">
          <div className="profile__intro flex flex-row justify-between">
            {/* Profile Picture  */}
            <Card className="profile__picbox w-[15.5rem] h-[12.5rem] rounded-[1.5rem]">
              <img
                src="/src/assets/images/flower_girl.png"
                className="profile__picture object-cover h-full w-full rounded-[1.5rem]"
              />
            </Card>
            {/* Profile Name  */}
            <Card className="profile__greeting w-[15.5rem] h-[12.5rem] rounded-[1.5rem]">
              <CardContent className="px-4 h-full flex flex-col justify-between">
                <p className="profile__opener font-serif text-xl font-semibold pt-[1rem]">
                  Hello 👋🏻 I’m
                </p>
                <div className="profile__titlebox">
                  <h2 className="profile__name text-4xl font-semibold font-serif">
                    Dianne S
                  </h2>
                  <h3 className="profile__role text-xl font-semibold font-serif pt-[0.5rem]">
                    Software Developer
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Soft Skills  */}
          <Card className="profile__soft-skills w-full mt-[1rem] rounded-[1.5rem] h-[13.75rem]">
            <CardHeader>
              <CardTitle className="profile__card-title text-[1.5rem]">
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap gap-[0.375rem] px-0 justify-center">
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Communicative
              </Badge>
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Analytical
              </Badge>
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Collaborative
              </Badge>
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Fast Learner
              </Badge>
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Adaptable
              </Badge>
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Critical Thinker
              </Badge>
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Accountable
              </Badge>
              <Badge className="profile__skill-badge rounded-[500px] mt-[0.5rem] h-[2rem] w-[7.5rem] flex justify-center">
                Attentative
              </Badge>
            </CardContent>
          </Card>
          {/* Hard Skills  */}
          <Card className="profile__hard-skills w-full   mt-[1rem] rounded-[1.5rem] h-[13.75rem]">
            <CardHeader>
              <CardTitle className="profile__card-title text-[1.5rem]">
                Hard Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-[0.6rem]">
              <div className="profile__skill-bar flex flex-row">
                <p className="profile__skill-name text-xs w-[15%] font-semibold">
                  C++
                </p>
                <div className="profile__skill-slider w-[85%] bg-amber-400 h-[0.75rem] rounded-[3px] border border-b-2 border-r-2 border-card-foreground self-center"></div>
              </div>
              <div className="profile__skill-bar flex flex-row">
                <p className="profile__skill-name text-xs w-[15%] font-semibold">
                  Java
                </p>
                <div className="profile__skill-slider w-[70%] bg-amber-400 h-[0.75rem] rounded-[3px] border border-b-2 border-r-2 border-card-foreground self-center"></div>
              </div>
              <div className="profile__skill-bar flex flex-row">
                <p className="profile__skill-name text-xs w-[15%] font-semibold">
                  HTML
                </p>
                <div className="profile__skill-slider w-[25%] bg-amber-400 h-[0.75rem] rounded-[3px] border border-b-2 border-r-2 border-card-foreground self-center"></div>
              </div>
            </CardContent>
          </Card>
          {/* Tools Card  */}
          <Card className="profile__tools w-full mt-[1rem] pb-[1.5rem] rounded-[1.5rem] h-[13.75rem]">
            <CardHeader>
              <CardTitle className="profile__card-title text-[1.5rem]">
                Tools
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
                <Card className="profile__code bg-primary border-card-foreground w-[13.5rem] h-[6.5rem] rounded-[1.25rem] flex justify-center items-center border-b-4">
                  <CardContent className="flex flex-row gap-[0.75rem] flex-wrap py-0">
                    <img
                      src="/src/assets/icons/logo_figma.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_photoshop.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_illustrator.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_premiere.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_notion.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_meet.svg"
                      className="profile__icon"
                    />
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
                <Card className="profile__design bg-primary border-card-foreground w-[13.5rem] h-[6.5rem] rounded-[1.25rem] flex justify-center items-center border-b-4">
                  <CardContent className="flex flex-row gap-[0.75rem] flex-wrap py-0">
                    <img
                      src="/src/assets/icons/logo_figma.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_photoshop.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_illustrator.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_premiere.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_notion.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_meet.svg"
                      className="profile__icon"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>
          {/* Certifications Card  */}
          <Card className="profile__tools w-full   mt-[1rem] pb-[1.5rem] rounded-[1.5rem] h-[13.75rem]">
            <CardHeader>
              <CardTitle className="profile__card-title text-[1.5rem]">
                Certifications
              </CardTitle>
            </CardHeader>
            <div className="profile__certifications-bar flex flex-row justify-evenly">
              <div className="profile__certifications-left flex flex-col items-center -mt-[1.438rem]">
                <Badge
                  className="profile__certifications-badge text-white rounded-[500px] relative top-3"
                  variant="secondary"
                >
                  Code
                </Badge>
                <Card className="profile__code bg-primary border-card-foreground w-[13.5rem] h-[6.5rem] rounded-[1.25rem] flex justify-center items-center border-b-4">
                  <CardContent className="flex flex-row gap-[0.75rem] flex-wrap py-0">
                    <img
                      src="/src/assets/icons/logo_figma.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_photoshop.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_illustrator.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_premiere.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_notion.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_meet.svg"
                      className="profile__icon"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="profile__certifications-right flex flex-col items-center -mt-[1.438rem]">
                <Badge
                  className="profile__certifications-badge text-white rounded-[500px] relative top-3"
                  variant="secondary"
                >
                  Design
                </Badge>
                <Card className="profile__design bg-primary border-card-foreground w-[13.5rem] h-[6.5rem] rounded-[1.25rem] flex justify-center items-center border-b-4">
                  <CardContent className="flex flex-row gap-[0.75rem] flex-wrap py-0">
                    <img
                      src="/src/assets/icons/logo_figma.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_photoshop.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_illustrator.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_premiere.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_notion.svg"
                      className="profile__icon"
                    />
                    <img
                      src="/src/assets/icons/logo_meet.svg"
                      className="profile__icon"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>
          {/* Contact Card  */}
          <div className="profile__contact rounded-3xl border-2 border-sky-600 text-card-foreground shadow-md bg-primary mt-[1rem]">
            <CardContent>
              <h2 className="profile__subtitle font-serif font-semibold mt-[0.5rem] text-[1.5rem]">
                Let´s chat!
              </h2>
              <div className="profile__contact-bar flex flex-row mt-[0.5rem] items-center">
                <img
                  src="/src/assets/images/logo_website.png"
                  className="profile__picture"
                />
                <p className="profile__contact-detail text-[0.875rem] font-semibold">
                  diannedeveloper.com
                </p>
              </div>
              <div className="profile__contact-bar flex flex-row mt-[0.5rem] items-center">
                <img
                  src="/src/assets/images/logo_gmail.png"
                  className="profile__picture"
                />
                <p className="profile__contact-detail text-[0.875rem] font-semibold">
                  diannedeveloper@gmail.com
                </p>
              </div>
              <div className="profile__contact-bar flex flex-row mt-[0.5rem] items-center">
                <img
                  src="/src/assets/images/logo_github.png"
                  className="profile__picture"
                />
                <p className="profile__contact-detail text-[0.875rem] font-semibold">
                  github.com/diannesurname
                </p>
              </div>
              <div className="profile__contact-bar flex flex-row mt-[0.5rem] items-center">
                <img
                  src="/src/assets/images/logo_linkedin.png"
                  className="profile__picture"
                />
                <p className="profile__contact-detail text-[0.875rem] font-semibold">
                  diannelinkedin.com
                </p>
              </div>
            </CardContent>
          </div>
        </div>
        <div className="profile__right w-[50rem] h-[1000px]">
          {/* Create Snapshot Card  */}
          <Card className="profile__creator w-[50rem]   rounded-[1.5rem] flex flex-col items-center">
            <CardHeader className="profile__creator-header font-serif font-semibold text-[2.25rem]">
              Capture Your Skills in a Snapshot
            </CardHeader>
            <CardContent className="profile__creator-main w-[34.875rem] text-center font-medium">
              <p className="profile__creator-body">
                Transform your professional journey into a standout snapshot.
              </p>
              <p className="profile__creator-body">
                Effortlessly showcase your skills and achievements, making it
                easier for employers to recognize your value and potential
              </p>
            </CardContent>
            <CardFooter>
              <button className="profile__creator-button bg-blue-600 h-[2.5rem] w-[14.5rem] text-[1.125rem] font-semibold rounded-[0.625rem] text-white shadow">
                Create my Snapshot
              </button>
            </CardFooter>
          </Card>

          {/* What I'm Working On Card  */}
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
                  Development of internal projects from scratch, product design
                  of brands
                </li>
                <li className="profile__current-list font-medium">
                  Landing page, web apps and hybrid app
                </li>
                <li className="profile__current-list font-medium">
                  Coordinating with outside agencies, art services, web
                  designer, marketing, printers, and colleagues as necessary
                </li>
              </ul>
              <Badge className="profile__current-badge rounded-[500px] mt-6 border-none shadow-none">
                Badge
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Profile;
