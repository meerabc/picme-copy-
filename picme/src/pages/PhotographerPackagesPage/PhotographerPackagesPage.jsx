import React from 'react'
import { Outlet, useParams, useNavigate, NavLink } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import BackButton from '../../components/BackButton'
import PMButton from '../../components/PMButton'
import PackageIcon from '../../assets/icons/PackageIcon'
import PhotographerCard from '../../components/PhotographerCard'
import PortfolioIcon from '../../assets/icons/PortfolioIcon'
import PackageCard from '../../components/PackageCard'
import { SEARCH_PHOTOGRAPHER_BY_ID_URL, GET_PACKAGES_URL } from '../../api/apiUrls'
import { getApiWithAuth } from '../../api/api'
import './PhotographerPackagesPage.css'

const PhotographerPackagesPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [packages, setPackages] = React.useState([])
  const [photographerData, setPhotographerData] = React.useState(null)
  const [packagesLoading, setPackagesLoading] = React.useState(true)

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
    const fetchPackages = async () => {
      if (!id) return
      
      try {
        setPackagesLoading(true)
        console.log('Loading packages...')
        
        const response = await getApiWithAuth(`${GET_PACKAGES_URL}?photographer_id=${id}`)
        
        if (response.success && response.data?.data) {
          console.log('Packages data:', response.data.data)
          setPackages(response.data.data)
        } else {
          console.error('Error fetching packages:', response.data)
          setPackages([])
        }
      } catch (error) {
        console.error('Error fetching packages:', error)
        setPackages([])
      } finally {
        setPackagesLoading(false)
      }
    }

    fetchPackages()
  }, [id])

  React.useEffect(() => {
    console.log("Photographer packages:", packages);
  }, [packages]);

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

  const packageCardElements = packages.map(packageData => (
    <PackageCard 
      key={packageData.id}
      packageData={packageData}
    />
  ))

  return (
    <div className='photographer-packages container'>
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
         
         <div>
           {packagesLoading ? (
             <div className='no-data-div'>
               Loading packages...
             </div>
           ) : packages.length === 0 ? (
             <div className='no-data-div'>
               No packages available
             </div>
           ) : (
             <div className='packages-container'>
               {packageCardElements}
             </div>
           )}
         </div>
      </div>
    </div>
  )
}

export default PhotographerPackagesPage