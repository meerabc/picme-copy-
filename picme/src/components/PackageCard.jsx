import React from 'react'
import DiamondIcon from '../assets/icons/DiamondIcon'
import PMButton from './PMButton'

const PackageCard = ({packageData}) => {

  const descriptionListItems = [
    `${packageData.delivery_days} ${packageData.delivery_days === 1 ? "day" : "days"} of package`,
    ...packageData.description
        .split(",")
        .map(item => item.trim())
        .filter(item => item) // removes empty strings
  ];

  return (
    <div className='package-card'>
        <div className='content'>
        <div className='icon-container'>
            <DiamondIcon />
        </div>
        <div className='main-info'>
            <p className='package-name'>{packageData.name}</p>
            <p className='price'>{packageData.symbol} {packageData.price}</p>
        </div>
        <ul className='description'>
            {descriptionListItems.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        <PMButton variant='filled'>continue</PMButton>
      </div>
    </div>
  )
}

export default PackageCard
