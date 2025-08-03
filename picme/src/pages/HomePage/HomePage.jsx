import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import PMButton from '../../components/PMButton'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import ChatIcon from '../../assets/icons/ChatIcon'
import HomeIcon from '../../assets/icons/HomeIcon'
// import MailIcon from '../../assets/icons/MailIcon'

const HomePage = () => {

  // const { logout } = useAuth()
  // const navigate = useNavigate()

  // const handleLogout = async () => {
  //   await logout()
  //   navigate('/')
  // }

  return (
    <div style={{display:'flex', margin:'15px', alignItems: 'center' , justifyContent:'center', width:'100px',backgroundColor:'blue'}}>
      <ProfileIcon />
      <ChatIcon />
      <HomeIcon />
      {/* <PMButton onClick={handleLogout} > Logout </PMButton> */}
    </div>
  )
}

export default HomePage
