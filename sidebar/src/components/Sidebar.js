import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import './Sidebar.css';

const Sidebar = ({ open }) => {
  return (
    <nav className={open ? 'sidebar active' : 'sidebar'}>
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className="sidebar__item">
              <Link className="sidebar__link" to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
