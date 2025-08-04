import React from 'react'

const DateSelector = ({text,value,onChange}) => {
  return (
    <div className="date-selector">
      <div>
      <p>{text}</p>
      <input 
        type="date" id="" name=""
        value={value} onChange={onChange}
      />
      </div>
    </div>
  )
}

export default DateSelector