import React from 'react'
import './ReviewsPage.css'
import { useOutletContext } from 'react-router-dom'
import { getApiWithAuth } from '../../api/api'
import ReviewCard from '../../components/ReviewCard' // You'll create this component

const ReviewsPage = () => {
  const { photographerData } = useOutletContext()
  const [reviews, setReviews] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchReviews = async () => {
      if (!photographerData?.id) return

      try {
        setLoading(true)
        console.log('Fetching reviews for photographer ID:', photographerData.id)
        
        const response = await getApiWithAuth(`/reviews?user_id=${photographerData.id}`)
        
        if (response.success && response.data) {
          console.log('Reviews data:', response.data.data)
          setReviews(response.data.data)
        } else {
          console.error('Failed to fetch reviews:', response.data)
          setReviews([])
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
        setReviews([])
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [photographerData?.id])

  if (loading) {
    return (
      <div className='no-data-div'>
        Loading reviews...
      </div>
    )
  }

  const reviewCardElements = reviews.map((review, index) => (
    <ReviewCard 
      key={review.id || index}
      review={review}
    />
  ))

    return (
    (reviews.length === 0) ? 
      <div className='no-data-div'>
        No data available
      </div> 
    : 
      <div className='reviews-container'>
        {reviewCardElements}
      </div>
  );
}

export default ReviewsPage
