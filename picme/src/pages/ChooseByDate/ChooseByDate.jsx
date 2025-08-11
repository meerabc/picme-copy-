import React from 'react'
import NavBar from '../../components/NavBar'
import './ChooseByDate.css'
import SearchField from '../../components/SearchField'
import DateSelector from '../../components/DateSelector'
import PhotographerCard from '../../components/PhotographerCard'
import LocationIcon from '../../assets/icons/LocationIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import { SEARCH_PHOTOGRAPHER_URL } from '../../api/apiUrls'
import { getApiWithAuth } from '../../api/api'

const ChooseByDate = () => {

  const [open, setOpen] = React.useState(false)
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')
  // Dummy values for latitude and longitude
  const [latitude] = React.useState('29.780148267560097')
  const [longitude] = React.useState('-95.3657162519862')
  const [photographersData,setPhotographersData] = React.useState([])


  const handleSearch = async () => {
    console.log('Loading...')
    try {
        // Format dates for API (DD-MM-YYYY format)
        const formatDateForAPI = (dateString) => {
          if (!dateString) return '' // Return empty string if no date selected
          const date = new Date(dateString)
          const day = String(date.getDate()).padStart(2, '0')
          const month = String(date.getMonth() + 1).padStart(2, '0')
          const year = date.getFullYear()
          return `${day}-${month}-${year}`
        }

        const formattedStartDate = formatDateForAPI(startDate)
        const formattedEndDate = formatDateForAPI(endDate)

        const apiUrl = `${SEARCH_PHOTOGRAPHER_URL}?latitude=${latitude}&longitude=${longitude}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`
        
        const response = await getApiWithAuth(apiUrl)
        
        if (response.success) {
          console.log('Photographers data:', response.data)
          setPhotographersData(response.data)
          setOpen(true) // Open the side container
        } else {
          console.log('Error fetching photographers:', response.data)
          setPhotographersData([])
        }
    } catch (error) {
        console.error('Search error:', error)
        setPhotographersData([])
    }
  }

  // React.useEffect(() => {
  // console.log("Updated photographers:", photographersData);
  // }, [photographersData]);

  const photographerCardElements = photographersData.map(photographerData=>
    <PhotographerCard 
       key={photographerData.photographer.id} 
       id={photographerData.photographer.id}
       isAvailable={photographerData.is_available}
       name={photographerData.photographer.name}
       rating={photographerData.photographer.average_rating}
       reviewsNo={photographerData.photographer.total_reviews}
       profileImg={photographerData.photographer.avatar_url}/>
  )
  
  return (
    <div className='choose-by-date-page container'>
      <NavBar />
      <div className='main-container'>
        <div className='map-container'>
          <div className='search-container'>
            <div className='left-div'>
              <SearchField />
              <div className='date-selection-container'>
                <DateSelector 
                   text='From'
                   value={startDate}
                   onChange={(e) => setStartDate(e.target.value)} />
                <DateSelector 
                   text='To'
                   value={endDate}
                   onChange={(e) => setEndDate(e.target.value)}/>               
              </div>
            </div>
            <div className='right-div'>
              <div className='icon-container'><LocationIcon /></div>
              <div className='icon-container' onClick={handleSearch}><SearchIcon /></div>
            </div>
          </div>
        </div>
        {open && 
          <div className='side-container'>
            <h1>Photographers Lists</h1>
            <p>Find the best photographers in your area for your next event!</p>
            {/* <CategorySelectionField /> */}
            {photographersData.length > 0 ? (
                <div className='cards-container'>
                  {photographerCardElements}
                </div>
              ) : (
                <p>No Photographer Found</p>
              )
            }

          </div>     
        }
      </div>
    </div>
  )
}

export default ChooseByDate

             
 