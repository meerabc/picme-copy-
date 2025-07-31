import React from 'react';
import BackArrow from '../assets/icons/BackArrow'; 
import {useNavigate} from 'react-router-dom'

const BackButton = () => { 
  const navigate = useNavigate()
  return (
    <div className='back-button' onClick={()=>navigate(-1)}>
      <BackArrow width={100} />
    </div>
  );
};

export default BackButton;