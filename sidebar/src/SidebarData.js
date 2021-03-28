import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaShoppingCart />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <BsFillPeopleFill />,
  },
];
