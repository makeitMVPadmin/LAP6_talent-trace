import { Card, CardContent } from '../ui/card';

function GreetingPanel({ data }) {
  try {
    return (
      <>
        <div className="profile__intro flex flex-row justify-center gap-[1rem] xl:justify-between xl:gap-0">
          {/* Profile Picture  */}
          <Card className="profile__picbox w-[9.5rem] h-[7rem] xl:w-[15.5rem] xl:h-[12.5rem] rounded-[1.5rem]">
            <img
              src={data[0].profilePhoto}
              className="profile__picture object-cover h-full w-full rounded-[1.5rem]"
            />
          </Card>
          {/* Profile Name  */}
          <Card className="profile__greeting w-[11.5rem] h-[7rem] xl:w-[15.5rem] xl:h-[12.5rem] rounded-[1.5rem]">
            <CardContent className="px-4 h-full flex flex-col justify-between">
              <p className="profile__opener font-serif text-[0.625rem] xl:text-xl xl:font-semibold pt-[1rem]">
                Hello 👋🏻 I’m
              </p>
              <div className="profile__titlebox">
                <h2 className="profile__name xl:text-4xl font-semibold font-serif">
                  {data[0].firstName + ' ' + data[0].lastName[0]}
                </h2>
                <h3 className="profile__role text-xs xl:text-xl font-semibold font-serif pt-[0.5rem]">
                  {data[0].discipline}
                </h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  } catch (err) {
    console.error(err);
  }
}

export default GreetingPanel;
