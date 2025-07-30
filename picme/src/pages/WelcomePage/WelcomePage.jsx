import FormContainer from '../../components/FormContainer'
import SideComponent from '../../components/SideComponent'
import PMButton from '../../components/PMButton'
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <div className='container'>
       <FormContainer>
          {/* <PMInput type='text' placeholder='hehe' icon={<LockIcon />} /> */}
          <h1>Experience Photography In a new Dimension</h1>
          <PMButton variant='filled'>continue as customer</PMButton>
          <PMButton variant='outline'>continue as photographer</PMButton>
       </FormContainer>
       <SideComponent />
    </div>
  )
}

export default WelcomePage
 