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
import './SignUpPage.css'

const SignUpPage = () => {
  return (
    <div className='container'>
       <FormContainer>
          <h1>Sign Up</h1>
          <PMInput type='text' placeholder='Full name' icon={<ProfileIcon />} />
          <PMInput type='email' placeholder='abc@email.com' icon={<MailIcon />} />
          <PMInput type='password' placeholder='Your Password' icon={<LockIcon />} />
          <PMInput type='password' placeholder='Confirm Password' icon={<LockIcon />} />
          <PMButton variant='filled'>sign in</PMButton>
            <div class="or-divider">
               <img className='separator-line' src={Line1} alt='left-line'/>
               <span>OR</span>
               <img className='separator-line' src={Line2} alt='right-line'/>
            </div>
            <LoginWithButton icon={<GoogleIcon/>}>Login with Google</LoginWithButton>
            <LoginWithButton icon={<FaceBookIcon/>}>Login with Facebook</LoginWithButton>
            <p className='login-div'>Don't have an account?<span> Sign up</span></p>
       </FormContainer>
       <SideComponent />
    </div>
  )
}

export default SignUpPage
