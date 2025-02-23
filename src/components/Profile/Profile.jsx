import ContactPanel from '../ContactPanel/ContactPanel';
import GreetingPanel from '../GreetingPanel/GreetingPanel';
import HardPanel from '../HardPanel/HardPanel';
import ProjectPanel from '../ProjectPanel/ProjectPanel';
import SoftPanel from '../SoftPanel/SoftPanel';
import ToolPanel from '../ToolPanel/ToolPanel';
import ViewerPanel from '../ViewerPanel/ViewerPanel';

function Profile() {
  return (
    <>
      <div className="profile flex flex-col items-center md:flex-row md:justify-center md:items-start md:gap-[2rem] py-[4rem]">
        <div className="profile__left w-[22rem] xl:w-[33rem]">
          <GreetingPanel /> {/* Picture and Intro Cards  */}
          <ViewerPanel display={'md:hidden'} /> {/* View my Snapshot */}
          <SoftPanel /> {/* Soft Skills  */}
          <HardPanel /> {/* Hard Skills  */}
          <ToolPanel name={'Tools'} /> {/* Tools Card  */}
          <ToolPanel name={'Certifications'} /> {/* Certifications Card  */}
          <ContactPanel display={'max-md:hidden'} /> {/* Contact Card  */}
        </div>
        <div className="profile__right w-[22rem] lg:w-[33rem] xl:w-[50rem]">
          <ViewerPanel display={'max-md:hidden'} /> {/* View my Snapshot */}
          <ProjectPanel /> {/* What I'm Working On Card  */}
          <ContactPanel display={'md:hidden'} /> {/* Contact Card  */}
        </div>
      </div>
    </>
  );
}

export default Profile;
