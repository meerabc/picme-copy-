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
import { validateEmail, validatePassword, validateFullName1To3Words } from '../../utils/helper'
import { useSearchParams} from 'react-router-dom'
import './SignUpPage.css'

const SignUpPage = () => {

  const [searchParams]=useSearchParams()
  const userType = searchParams.get('type')

  //form data state
  const [formData,setFormData] = React.useState(
    {
      fullName: '',
      email:'',
      password:'',
      confirmPassword:''
    }
  )

  const [errors,setErrors] = React.useState(
    {
      fullName: '',
      email:'',
      password:'',
      confirmPassword:''
    }
  )

  function handleInputChange(field,value){
    setFormData(prevData=>({
      ...prevData,
      [field] : value
    }))
    console.log(formData)

    if (errors[field]){
      setErrors(prevErrors=>({
        ...prevErrors,
        [field] : ''
      }))
    }
  }

  function validateField(field,value){
    let error=''

    switch(field){
      case 'fullName':
        if(!value.trim()) {
          error='Full name is required'
        }
        else if(!validateFullName1To3Words(value)){
          error='Please enter 1-3 words, each 2-25 characters long'
        }
        break
      
      case'email':
        if(!value.trim()) {
          error='email is required'
        }
        else if(!validateEmail(value)){
          error = 'Please enter a valid email'
        }
        break

        case 'password':
          if (!value) {
            error = 'Password is required'
          } else if (!validatePassword(value)) {
            error = 'Password must be 8+ chars with letter, number & special character'
          }
          break

        case 'confirmPassword':
          if (!value) {
            error = 'Please confirm your password'
          } else if (value !== formData.password) {
            error = 'Passwords do not match'
          }
          break

        default:
          break
    }
    return error
  }

  function validateForm(){
    const newErrors={}
    let isValid=true

    Object.keys(formData).forEach(field=>{
      const error = validateField(field,formData[field])
      newErrors[field] = error
      if(error) isValid=false
    
    setErrors(newErrors)
    return isValid
    })
  }

  function handleSubmit(e){
     e.preventDefault() 

     if (validateForm()) {
      console.log('Form is valid!')
      console.log('Form data:', formData)
      console.log('User type:', userType === '0' ? 'Customer' : 'Photographer')
      // Here you'll later add API call logic
    } else {
      console.log('Form has errors')
    }
  }

  return (
    <div className='container'>
      <FormContainer>
        <form onSubmit={handleSubmit} noValidate>
          <h1>Sign Up</h1>
          <PMInput 
            type='text' 
            placeholder='Full name' 
            icon={<ProfileIcon />} 
            value={formData.fullName} 
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            error={errors.fullName}
          />
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
            error={errors.password}
          />
          <PMInput 
            type='password' 
            placeholder='Confirm Password' 
            icon={<LockIcon />} 
            value={formData.confirmPassword} 
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            error={errors.confirmPassword}
          />
          <PMButton type='submit' variant='filled'>sign up</PMButton>
        </form>
        <div className="or-divider">
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
