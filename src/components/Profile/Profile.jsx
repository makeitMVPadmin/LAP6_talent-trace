import { useUser } from '@/context/UserDetailsContext';
import ContactPanel from '../ContactPanel/ContactPanel';
// import CreatorPanel from '../CreatorPanel/CreatorPanel';
import GreetingPanel from '../GreetingPanel/GreetingPanel';
import HardPanel from '../HardPanel/HardPanel';
import ProjectPanel from '../ProjectPanel/ProjectPanel';
import SoftPanel from '../SoftPanel/SoftPanel';
import ToolPanel from '../ToolPanel/ToolPanel';
import ViewerPanel from '../ViewerPanel/ViewerPanel';
// import ViewerPanel from '../ViewerPanel/ViewerPanel';

function Profile() {
  const { user, error, loading } = useUser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <>
      <div className="profile flex flex-col items-center md:flex-row md:justify-center md:items-start md:gap-[2rem] py-[4rem] xl:py-[6rem]">
        <div className="profile__left w-[22rem] xl:w-[33rem]">
          <GreetingPanel data={user} /> {/* Picture and Intro Cards  */}
          {/* <CreatorPanel display={'md:hidden'} /> */}
          <ViewerPanel display={'md:hidden'} />
          <SoftPanel /> {/* Soft Skills  */}
          <HardPanel /> {/* Hard Skills  */}
          <ToolPanel name={'Tools'} /> {/* Tools Card  */}
          <ToolPanel name={'Certifications'} /> {/* Certifications Card  */}
          {/* <ContactPanel data={user} display={'max-md:hidden'} />{' '} */}
          {/* Contact Card  */}
        </div>
        <div className="profile__right w-[22rem] lg:w-[33rem] xl:w-[50rem]">
          {/* <CreatorPanel display={'max-md:hidden'} /> */}
          <ViewerPanel display={'max-md:hidden'} />
          <ProjectPanel /> {/* What I'm Working On Card  */}
          <ContactPanel data={user} display={''} /> {/* Contact Card  */}
        </div>
      </div>
    </>
  );
}

export default Profile;
