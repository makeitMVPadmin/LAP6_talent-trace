import { Instagram, Twitter, Linkedin } from 'lucide-react';
import logo from '../../assets/logos/Vector.svg';

function Footer() {
  return (
    <footer className="bg-[#0054ab] flex flex-col items-start px-[80px] py-[73px] pb-[100px] md:px-[80px] md:py-[73px] md:pb-[100px] sm:px-[40px] sm:py-[60px] sm:pb-[70px] xs:px-[30px] xs:py-[50px] xs:pb-[60px]">
      {/* Logo - White */}
      <img
        className="mb-[26px] w-[250px] sm:w-[400px] xs:w-[140px]"
        src={logo}
        alt="communiti logo"
      />

      {/* Social Icons - Now white */}
      <div className="flex items-end gap-[26px] sm:gap-[20px] xs:gap-[15px] flex-wrap">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            className="w-[54px] h-[54px] sm:w-[48px] sm:h-[48px] xs:w-[40px] xs:h-[40px] text-white"
            strokeWidth={1.5}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter
            className="w-[54px] h-[54px] sm:w-[48px] sm:h-[48px] xs:w-[40px] xs:h-[40px] text-white"
            strokeWidth={1.5}
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            className="w-[54px] h-[54px] sm:w-[48px] sm:h-[48px] xs:w-[40px] xs:h-[40px] text-white"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
