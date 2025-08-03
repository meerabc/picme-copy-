import React from 'react'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import ChatIcon from '../../assets/icons/ChatIcon'
import HomeIcon from '../../assets/icons/HomeIcon'
import { Images } from '../constants/Images';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <img src={Images.navLogo} alt='picme logo' />
      <ul className='navbar'>
         <li>
            <NavLink to='/choose-location'>
              <HomeIcon />Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/chats'>
              <ChatIcon />Chats
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile'>
              <ProfileIcon />Profile
            </NavLink>
          </li>
      </ul>
    </div>
  )
}

export default NavBar
