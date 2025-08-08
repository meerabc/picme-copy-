import FormContainer from '../../components/FormContainer'
import SideComponent from '../../components/SideComponent'
import PMButton from '../../components/PMButton'
import mobileImage from '../../assets/images/mobile-image.png'
import {useNavigate} from 'react-router-dom'
import './WelcomePage.css'

const WelcomePage = () => {

  const navigate = useNavigate()

  function handleCustomerClick(){
  navigate('/signup?type=0')
}

function handlePhotographerClick(){
  navigate('/signup?type=1')
}
  

  return (
    <div className='welcome-page container'>
       <FormContainer>
          {/* initially set to display of none only shown for mobile screens */}
          <div className='mobile-image'>
              <img src={mobileImage} alt='main-image' />
          </div> 
          <h1>Experience <span>Photography</span> In a new Dimension</h1>
          <PMButton variant='filled' onClick={handleCustomerClick}>continue as customer</PMButton>
          <PMButton variant='outline' onClick={handlePhotographerClick}>continue as photographer</PMButton>
       </FormContainer>
       <SideComponent />
    </div>
  )
}

export default WelcomePage
 