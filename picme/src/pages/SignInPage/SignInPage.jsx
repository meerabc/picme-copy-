import React from 'react'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import SideComponent from '../../components/SideComponent'
import PMButton from '../../components/PMButton'
import PMInput from '../../components/PMInput'
import PMToggle from '../../components/PMToggle'
import LockIcon from '../../assets/icons/LockIcon'
import MailIcon from '../../assets/icons/MailIcon'
import Line1 from '../../assets/images/Line1.png'
import Line2 from '../../assets/images/Line2.png'
import LoginWithButton from '../../components/LoginWithButton'
import BackButton from '../../components/BackButton'
import GoogleIcon from '../../assets/icons/GoogleIcon'
import FaceBookIcon from '../../assets/icons/FaceBookIcon'
import { validateEmail } from '../../utils/helper'
import { postAPIWithoutAuth } from '../../api/api'
import { setAccessToken,getAccessToken} from '../../utils/localStorage'
import { LOGIN_URL } from '../../api/apiUrls'
import './SignInPage.css'

const SignInPage = () => {

  const [searchParams]=useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const userType = searchParams.get('type')

  //Gets return URL from location state (if user was redirected here)
  const returnUrl = location.state?.returnUrl || '/dashboard'

  const [formData,setFormData] = React.useState({
    email:'',
    password:''
  })

  const [errors,setErrors] = React.useState({
    email:'',
    password:'' 
  })

  const [rememberMe, setRememberMe] = React.useState(false)

  function handleRememberMeToggle() {
    setRememberMe(prev=>!prev)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))

        // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

    const validateEmailField = (value) => {
    if (!value.trim()) {
      return 'Email is required'
    } else if (!validateEmail(value)) {
      return 'Please enter a valid email'
    }
    return ''
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    const emailError = validateEmailField(formData.email)
    newErrors.email = emailError
    if (emailError) isValid = false

    // Checks if password is empty (no error message, just red border)
    newErrors.password = !formData.password.trim() 
    if (!formData.password.trim()) isValid = false

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      console.log('Form has errors')
      return
    }

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        type: parseInt(userType) // 0 for customer, 1 for photographer
      }

      console.log('Sending login data:', payload)

      // Make API call
      const response = await postAPIWithoutAuth(LOGIN_URL, payload)

      if (response.success) {
        console.log('Login successful:', response.data)
        console.log('Access token:', response.headers.getAuthorization())
        
        // Store access token
        if (response.headers?.getAuthorization) {
          await setAccessToken(response.headers.getAuthorization())
        }

        // Handle Remember Me logic
        if (rememberMe) {
          // If remember me is checked, token will persist (already saved above)
          console.log('Remember me enabled - token will persist')
        } else {
          // If remember me is not checked,(will implement logic later)
          console.log('Remember me disabled - consider adding token expiry')
        }
        
        // Navigate based on user type or to a dashboard
        // You can customize this navigation logic as needed
        console.log('Login successful for user type:', userType === '0' ? 'Customer' : 'Photographer')
        console.log(getAccessToken())
       
        navigate(returnUrl)
        
      } else {
        console.log('Login error:', response.data)
        // Handle login errors - you can show error messages to user here
        // For example, invalid credentials, user not found, etc.
      }
      
    } catch (error) {
      console.error('Login error:', error)
      // Handle network errors or other exceptions
    }
  }


  return (
    <div className='container'>
       <BackButton />
       <FormContainer>
          <form onSubmit={handleSubmit} noValidate className='signup-form'>
            <h1 className='heading'>Sign in</h1>
            <PMInput 
              type='email' 
              placeholder='abc@email.com' 
              icon={<MailIcon />} 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
            />
            <PMInput 
              type='password' 
              placeholder='Your Password' 
              icon={<LockIcon />} 
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              error={errors.password ? 'error' : ''} // 'error' indicates no error msg but red border
            />
            <div className='div'>
              <PMToggle 
                label='Remember Me' 
                isOn={rememberMe} 
                onToggle={handleRememberMeToggle}
              />
              <p>Forgot Password?</p>
            </div>
            <PMButton type='submit' variant='filled'>sign in</PMButton>
          </form>
            <div class="or-divider">
               <img className='separator-line' src={Line1} alt='left-line'/>
               <span>OR</span>
               <img className='separator-line' src={Line2} alt='right-line'/>
            </div>
            <LoginWithButton icon={<GoogleIcon/>}>Login with Google</LoginWithButton>
            <LoginWithButton icon={<FaceBookIcon/>}>Login with Facebook</LoginWithButton>
            <p className='sign-up-div' onClick={()=>navigate(`/signup?type=${userType}`,{ state: { returnUrl } })}>Don't have an account?
              <span> Sign up</span>
            </p>
       </FormContainer>
       <SideComponent />
    </div>
  )
}

export default SignInPage
