import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import BackButton from '../../components/BackButton'
import PMButton from '../../components/PMButton'
import PackageIcon from '../../assets/icons/PackageIcon'
import PortfolioIcon from '../../assets/icons/PortfolioIcon'
import { SEARCH_PHOTOGRAPHER_BY_ID_URL } from '../../api/apiUrls'
import { getApiWithAuth } from '../../api/api'
import { NavLink } from 'react-router-dom'
import './PhotographerPortfolioPage.css'
import PhotographerCard from '../../components/PhotographerCard'

const PhotographerPortfolioPage = () => {
  const { id } = useParams()
  const [photographerData, setPhotographerData] = React.useState(null)
  const [categories, setCategories] = React.useState([])
  const [selectedCategory,setSelectedCategory] = React.useState('all')
  const [open,setOpen] = React.useState(false)

  function handleDropDown(){
    setOpen(prev=>!prev)
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category)
    setOpen(false)
  }

  React.useEffect(() => {
    const fetchPhotographerDetails = async () => {
      try {
        console.log('Loading photographer details...')
        
        const response = await getApiWithAuth(`${SEARCH_PHOTOGRAPHER_BY_ID_URL}/${id}`)
      
        
        if (response.success) {
          console.log('Photographer details:', response.data.data)
          setPhotographerData(response.data.data)
          //photographer categories will be set here
          const uniqueCategories = response.data.data.work_list.map(work=>work.work_type)
          setCategories(['all', ...uniqueCategories])
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
  
  //dropdown list items
  const listItems = categories.map((category,index)=>
    <li key={index} onClick={()=>handleCategoryChange(category)}>{category}</li>
  )

  const outletContext = {photographerData,selectedCategory}

  // React.useEffect(() => {
  //   console.log("Updated photographers:", photographerData);
  // }, [photographerData]);

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
            <PMButton>
              <PortfolioIcon />
              Portfolio
            </PMButton>
            <PMButton variant='outline'>
              <PackageIcon />
              Package
            </PMButton>
         </div>
         <div className='portfolio-navbar-container'>
          <ul className='portfolio-navbar'>
            <li>
                <NavLink to='.' end>
                  Photos
                </NavLink>
              </li>
              <li>
                <NavLink to='videos'>
                  Videos
                </NavLink>
              </li>
              <li>
                <NavLink to='reviews'>
                  Reviews
                </NavLink>
              </li>
          </ul>
          <div className='categories-selection-container' onClick={handleDropDown}>
            <div className='category-selection-div'>
              {selectedCategory === 'all' ? 'Category type' : selectedCategory}
              {/* conditionally rendering dropdown */}
              {open && <div className='category-dropdown'>{listItems}</div>}
            </div>
          </div>
         </div>
         <div className='portfolio-outlet-container'>
          <Outlet context={outletContext}/>   
         </div>
      </div>
    </div>
  )
}

export default PhotographerPortfolioPage
