import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton'
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';


const Navbar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div>New  new Navbar</div>
  )
}

export default Navbar