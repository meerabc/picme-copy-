import React from 'react'
import './PhotosPage.css'
import {useOutletContext} from 'react-router-dom'
import ImageCard from '../../components/ImageCard'

const PhotosPage = () => {
 
  const {photographerData,selectedCategory} = useOutletContext()

  function getAllPhotoObjects(){
    if(!photographerData?.work_list) return []
    const allPhotoObjects = []
    photographerData.work_list.forEach(work=>
      work.photos.forEach(photoURL=>
        allPhotoObjects.push({
          url : photoURL ,
          category : work.work_type
        })
      )
    )
    return allPhotoObjects
  }
  
  function getFilteredPhotos(){
    const allPhotos = getAllPhotoObjects()
    
    if (selectedCategory === 'all') {
      return allPhotos
    }
    
    return allPhotos.filter(photo => photo.category === selectedCategory)
  }

  const filteredPhotos = getFilteredPhotos()

  const imageCardElements = filteredPhotos.map(photo=>
     <ImageCard imageURL={photo.url}/>
  )
  
  return (
    (filteredPhotos.length === 0) ? 
      <div className='no-data-div'>
        No data available
      </div> 
    : 
      <div className='photos-container'>
        {imageCardElements}
      </div>
  );
}

export default PhotosPage
