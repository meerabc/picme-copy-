import React from 'react'
import { Outlet, useParams, useNavigate, NavLink } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import BackButton from '../../components/BackButton'
import PMButton from '../../components/PMButton'
import PackageIcon from '../../assets/icons/PackageIcon'
import PhotographerCard from '../../components/PhotographerCard'
import PortfolioIcon from '../../assets/icons/PortfolioIcon'
import { SEARCH_PHOTOGRAPHER_BY_ID_URL } from '../../api/apiUrls'
import { getApiWithAuth } from '../../api/api'
import './PhotographerPackagesPage.css'


const PhotographerPackagesPage = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  // const [packages, setPackages] = React.useState(null)
  const [photographerData, setPhotographerData] = React.useState(null)

  React.useEffect(() => {
    const fetchPhotographerDetails = async () => {
      try {
        console.log('Loading photographer details...')
        
        const response = await getApiWithAuth(`${SEARCH_PHOTOGRAPHER_BY_ID_URL}/${id}`)
        
        if (response.success) {
          console.log('Photographer details:', response.data.data)
          setPhotographerData(response.data.data)
        } else {
          console.error('Error fetching photographer details:', response.data.success)
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
         <PhotographerCard 
            key={photographerData.id} 
            id={photographerData.id}
            name={photographerData.full_name}
            rating={photographerData.average_rating}
            reviewsNo={photographerData.total_reviews}
            profileImg={photographerData.profile_image_url}
         />
         <div className='buttons-container'>
            <PMButton onClick={()=>navigate(`/photographer/portfolio/${id}`)}>
              <PortfolioIcon />
              Portfolio
            </PMButton>
            <PMButton variant='outline' onClick={()=>navigate('.')}>
              <PackageIcon />
              Package
            </PMButton>
         </div>
         <div className='portfolio-navbar-container'>
          <ul className='portfolio-navbar'>
            <li>
                <NavLink to='.' end>
                  Choose Package
                </NavLink>
              </li>
          </ul>
         </div>
      </div>
    </div>
  )
}

export default PhotographerPackagesPage
