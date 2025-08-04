
import ProfileIcon from '../../assets/icons/ProfileIcon'
import ChatIcon from '../../assets/icons/ChatIcon'
import HomeIcon from '../../assets/icons/HomeIcon'
import NavBar from '../../components/NavBar'
import PMButton from '../../components/PMButton'
import locationImg from '../../assets/images/location_img.png'
import {useNavigate} from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {

  const navigate=useNavigate()

  return (
    <div className='home-page container'>
      <NavBar />
      <div className='main-container'>
        <div className='search-location-div'>
          <div className='img-container'><img src={locationImg} alt='map-img' /></div>
          <h2>Search Location</h2>
          <p>Find the best photographers in your area for your next event!</p>
          <PMButton 
              variant='filled' 
              onClick={()=>navigate('/choose-location-by-date')}>
                choose location
          </PMButton>
          <PMButton 
             variant='outline'
             onClick={()=>navigate('/find-by-name')}>
               find by name
          </PMButton>
          <PMButton 
             variant='outline'
             onClick={()=>navigate('/find-by-category')}>
               find by category
          </PMButton>
        </div>
      </div>
    
    </div>
  )
}

export default HomePage




  // const { logout } = useAuth()
  // const navigate = useNavigate()

  // const handleLogout = async () => {
  //   await logout()
  //   navigate('/')
  // }

  /* <PMButton onClick={handleLogout} > Logout </PMButton> */