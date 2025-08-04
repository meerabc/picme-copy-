import React from 'react'
import FormContainer from '../../components/FormContainer'
import SideComponent from '../../components/SideComponent'
import PMButton from '../../components/PMButton'
import PMInput from '../../components/PMInput'
import LockIcon from '../../assets/icons/LockIcon'
import MailIcon from '../../assets/icons/MailIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import Line1 from '../../assets/images/Line1.png'
import Line2 from '../../assets/images/Line2.png'
import LoginWithButton from '../../components/LoginWithButton'
import GoogleIcon from '../../assets/icons/GoogleIcon'
import FaceBookIcon from '../../assets/icons/FaceBookIcon'
import './VerificationPage.css'

const VerificationPage = () => {
  return (
    <div className='verification-page container'>
       <FormContainer>
          <h1>Verification</h1>
          <p>We’ve send you the verification<br/> code on abc@gmail.com</p>
          {/* <PMInput type='text' placeholder='Full name' icon={<ProfileIcon />} />
          <PMInput type='email' placeholder='abc@email.com' icon={<MailIcon />} />
          <PMInput type='password' placeholder='Your Password' icon={<LockIcon />} />
          <PMInput type='password' placeholder='Confirm Password' icon={<LockIcon />} /> */}
          <PMButton variant='filled'>continue</PMButton>
       </FormContainer>
       <SideComponent />
    </div>
  )
}

export default VerificationPage
