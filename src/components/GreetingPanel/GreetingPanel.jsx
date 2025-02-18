import { Card, CardContent } from '../ui/card';

function GreetingPanel() {
  return (
    <>
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
    </>
  );
}

export default GreetingPanel;
