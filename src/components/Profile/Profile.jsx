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
      <div className="profile flex flex-row justify-center gap-[2rem] py-[4rem]">
        <div className="profile__left w-[33rem]">
          <GreetingPanel /> {/* Picture and Intro Cards  */}
          <SoftPanel /> {/* Soft Skills  */}
          <HardPanel /> {/* Hard Skills  */}
          <ToolPanel name={'Tools'} /> {/* Tools Card  */}
          <ToolPanel name={'Certifications'} /> {/* Certifications Card  */}
          <ContactPanel /> {/* Contact Card  */}
        </div>
        <div className="profile__right w-[50rem] h-[1000px]">
          <ViewerPanel /> {/* View my Snapshot */}
          <ProjectPanel /> {/* What I'm Working On Card  */}
        </div>
      </div>
    </>
  );
}

export default Profile;
