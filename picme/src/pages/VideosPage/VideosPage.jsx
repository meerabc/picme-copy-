import React from 'react'
import './VideosPage.css'
import {useOutletContext} from 'react-router-dom'
import VideoCard from '../../components/VideoCard'

const VideosPage = () => {

  const {photographerData,selectedCategory} = useOutletContext()

  function getAllVideoObjects(){
    if(!photographerData?.work_list) return []
    const allVideoObjects = []
    photographerData.work_list.forEach(work=>
      work.videos.forEach(videoURL=>
        allVideoObjects.push({
          url : videoURL ,
          category : work.work_type
        })
      )
    )
    return allVideoObjects
  }
  
  function getFilteredVideos(){
    const allVideos = getAllVideoObjects()
    
    if (selectedCategory === 'all') {
      return allVideos
    }
    
    return allVideos.filter(video => video.category === selectedCategory)
  }

  const filteredVideos = getFilteredVideos()

  const videoCardElements = filteredVideos.map(photo=>
     <VideoCard videoURL={photo.url}/>
  )
  
    return (
    (filteredVideos.length === 0) ? 
      <div className='no-data-div'>
        No data available
      </div> 
    : 
      <div className='videos-container'>
        {videoCardElements}
      </div>
  );
}

export default VideosPage
