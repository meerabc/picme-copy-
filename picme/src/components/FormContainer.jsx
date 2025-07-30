import React from 'react';

import { Images } from '../constants/Images';

const FormContainer = ({ children }) => {
  return (
    <div className='form-container'>
          <img src={Images.logo} alt='picme logo' />
        <div className='form-content'>
          {children}  {/* Render children here instead of Outlet */}
        </div>
    </div>
  );
};

export default FormContainer;