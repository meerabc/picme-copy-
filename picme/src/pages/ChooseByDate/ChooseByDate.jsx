import React from 'react'
import NavBar from '../../components/NavBar'
// import mapImg from '../../assets/images/map-img.webp'
import './ChooseByDate.css'
import SearchField from '../../components/SearchField'
import DateSelector from '../../components/DateSelector'
import LocationIcon from '../../assets/icons/LocationIcon'
import SearchIcon from '../../assets/icons/SearchIcon'

const ChooseByDate = () => {

  const [open,setOpen] = React.useState(true)
  return (
    <div className='choose-by-date-page container'>
      <NavBar />
      <div className='main-container'>
        <div className='map-container'>
          <div className='search-container'>
            <div className='left-div'>
              <SearchField />
              <div className='date-selection-container'>
                <DateSelector text='From' />
                <DateSelector text='To'/>               
              </div>
            </div>
            <div className='right-div'>
              <div className='icon-container'><LocationIcon /></div>
              <div className='icon-container'><SearchIcon /></div>
            </div>
          </div>
        </div>
        {open && 
          <div className='side-container'></div>     
        }
      </div>
    </div>
  )
}

export default ChooseByDate

             
 