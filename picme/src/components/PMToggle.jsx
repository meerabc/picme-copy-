import React from 'react'

const PMToggle = ({isOn,onToggle,label}) => {
  return (
    <div className='toggle-div'>
        <div className={`toggle-button ${isOn ? 'active' : ''}`}
             onClick={onToggle}
        >
            <div className={`toggle-ball ${isOn ? 'active' : ''}`} />
        </div>
        {label && <span>{label}</span>}
    </div>
  )
}

export default PMToggle
