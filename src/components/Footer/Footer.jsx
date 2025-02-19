import { Instagram, Twitter, Linkedin } from 'lucide-react';
import logo from '../../assets/logos/Vector.svg';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={logo} alt="communiti logo" />

      <div className="footer__socials">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={54} strokeWidth={1.5} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={54} strokeWidth={1.5} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={54} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
