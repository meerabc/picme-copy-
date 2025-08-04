import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import BackButton from '../../components/BackButton'
import RatingsIcon from '../../assets/icons/RatingsIcon'
import avatar from '../../assets/images/avatar.png'
import { SEARCH_PHOTOGRAPHER_BY_ID_URL } from '../../api/apiUrls'
import { getApiWithAuth } from '../../api/api'
import './PhotographerPortfolioPage.css'

const PhotographerPortfolioPage = () => {
  const { id } = useParams()
  const [photographerData, setPhotographerData] = React.useState(null)

  React.useEffect(() => {
    const fetchPhotographerDetails = async () => {
      try {
        console.log('Loading photographer details...')
        
        const response = await getApiWithAuth(`${SEARCH_PHOTOGRAPHER_BY_ID_URL}/${id}`)
        
        if (response.success) {
          console.log('Photographer details:', response.data)
          setPhotographerData(response.data)
        } else {
          console.error('Error fetching photographer details:', response.data)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    if (id) {
      fetchPhotographerDetails()
    }
  }, [id])

  React.useEffect(() => {
    console.log("Updated photographers:", photographerData);
  }, [photographerData]);

  if (!photographerData) {
    return (
      <div className='photographer-portfolio container'>
        <NavBar />
        <div className='main-container'>
          <BackButton />
          <p>Loading photographer data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='photographer-portfolio container'>
      <NavBar />
      <div className='main-container'>
         <img src={avatar} alt='profile-pic'/>
         <h2>{photographerData.data.full_name}</h2>
         <p>{`(${photographerData.data.total_reviews})reviews`}</p>
      </div>
    </div>
        
  )
}

export default PhotographerPortfolioPage
