import { CardContent } from '../ui/card';

function ContactPanel() {
  return (
    <>
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
    </>
  );
}

export default ContactPanel;
