import FormContainer from '../../components/FormContainer'
import SideComponent from '../../components/SideComponent'
import PMButton from '../../components/PMButton'
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
    <div className='container'>
       <FormContainer>
          <h1>Experience Photography In a new Dimension</h1>
          <PMButton variant='filled' onClick={handleCustomerClick}>continue as customer</PMButton>
          <PMButton variant='outline' onClick={handlePhotographerClick}>continue as photographer</PMButton>
       </FormContainer>
       <SideComponent />
    </div>
  )
}

export default WelcomePage
 