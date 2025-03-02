import { Card, CardContent } from '../ui/card';

function GreetingPanel({ data }) {
  try {
    return (
      <>
        <div className="profile__intro flex flex-row justify-center gap-[1rem] xl:justify-between xl:gap-0">
          {/* Profile Picture  */}
          <Card className="profile__picbox w-[9.5rem] h-[7rem] xl:w-[15.5rem] xl:h-[12.5rem] rounded-[1.5rem] bg-[#FFF1C5] border-0">
            <img
              src={data[0].profilePhoto}
              className="profile__picture object-cover object-top h-full w-full rounded-[1.5rem] border border-[#C3AF6F] border-b-[3px] border-r-[3px] xl:border-b-[5px] xl:border-r-[5px]"
            />
          </Card>
          {/* Profile Name  */}
          <Card className="profile__greeting w-[11.5rem] h-[7rem] xl:w-[15.5rem] xl:h-[12.5rem] rounded-[1.5rem] border-b-[3px] border-r-[3px] xl:border-b-[5px] xl:border-r-[5px]">
            <CardContent className="px-4 h-full flex flex-col justify-between">
              <p className="profile__opener font-serif text-[0.625rem] xl:text-xl xl:font-semibold pt-[1rem]">
                Hello 👋🏻 I’m
              </p>
              <div className="profile__titlebox">
                <h2 className="profile__name xl:text-4xl font-semibold font-serif">
                  {data[0].firstName + ' ' + data[0].lastName[0]}
                </h2>
                <h4 className="profile__role text-xs xl:text-xl font-normal font-serif pt-[0.5rem]">
                  {data[0].discipline}
                </h4>
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
