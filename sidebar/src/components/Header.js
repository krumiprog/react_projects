import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import './Header.css';

const Header = ({ open, toggleSidebar }) => {
  return (
    <div className={open ? 'header active' : 'header'}>
      <button className="btn" onClick={toggleSidebar}>
        {open ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
      </button>
      <div className="header__logo">Sidebar</div>
    </div>
  );
};

export default Header;
