import PropTypes from 'prop-types';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logos/logo.svg';
import profile from '../../assets/icons/profile.svg';
import home from '../../assets/icons/house.svg';
import communities from '../../assets/icons/groups.svg';
import coffeeChat from '../../assets/icons/group.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center pl-[41px] pr-[41px] py-[35px] bg-[#fbfdff] border border-gray-400 shadow-[0px_1px_3px_rgba(0,0,0,0.2),0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] relative">
      {/* Logo */}
      <img className="h-[40px] px-[4px]" src={logo} alt="communiti logo" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-[51px]">
        <NavItem icon={home} text="Home" />
        <NavItem icon={communities} text="Communities" />
        <NavItem icon={coffeeChat} text="Coffee Chat" />
        <a
          href="/"
          className="flex flex-col items-center text-black text-[16px] font-semibold leading-[24px] gap-[4px]"
        >
          <img className="w-[24px] h-[24px]" src={profile} alt="Profile" />
          Profile
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 w-full bg-[#fbfdff] shadow-lg md:hidden transition-transform duration-300 ${
          menuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-[200%] opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6">
          <NavItem icon={home} text="Home" onClick={() => setMenuOpen(false)} />
          <NavItem
            icon={communities}
            text="Communities"
            onClick={() => setMenuOpen(false)}
          />
          <NavItem
            icon={coffeeChat}
            text="Coffee Chat"
            onClick={() => setMenuOpen(false)}
          />
          <a
            href="/"
            className="flex flex-col items-center text-black text-[16px] font-semibold leading-[24px] gap-[4px]"
            onClick={() => setMenuOpen(false)}
          >
            <img className="w-[24px] h-[24px]" src={profile} alt="Profile" />
            Profile
          </a>
        </nav>
      </div>
    </header>
  );
}

const NavItem = ({ icon, text, onClick }) => (
  <button
    className="flex flex-col items-center text-black text-[16px] font-semibold leading-[24px] gap-[4px]"
    onClick={onClick}
  >
    <img className="w-[24px] h-[24px]" src={icon} alt={text} />
    <span>{text}</span>
  </button>
);

//Define prop types for NavItem to prevent ESLint warnings
NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Header;
