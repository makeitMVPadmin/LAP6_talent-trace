import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';

function CreatorPanel() {
  return (
    <>
      <Card className="profile__creator w-[50rem]   rounded-[1.5rem] flex flex-col items-center">
        <CardHeader className="profile__creator-header font-serif font-semibold text-[2.25rem]">
          Capture Your Skills in a Snapshot
        </CardHeader>
        <CardContent className="profile__creator-main w-[34.875rem] text-center font-medium">
          <p className="profile__creator-body">
            Transform your professional journey into a standout snapshot.
          </p>
          <p className="profile__creator-body">
            Effortlessly showcase your skills and achievements, making it easier
            for employers to recognize your value and potential
          </p>
        </CardContent>
        <CardFooter>
          <button className="profile__creator-button bg-blue-600 h-[2.5rem] w-[14.5rem] text-[1.125rem] font-semibold rounded-[0.625rem] text-white shadow">
            Create my Snapshot
          </button>
        </CardFooter>
      </Card>
    </>
  );
}

export default CreatorPanel;
