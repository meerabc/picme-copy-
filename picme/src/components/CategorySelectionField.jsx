import React, { useState, useEffect, useRef } from 'react'
import { getApiWithAuth } from '../api/api'
import { IoChevronDown, IoChevronUp, IoCheckmark } from 'react-icons/io5'
import { GET_CATEGORIES } from '../../api/apiUrls'

const CategorySelectionField = ({ selectedCategories = [], onCategoriesChange }) => {
  const [categories, setCategories] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      console.log('loading')
      try {
        const response = await getApiWithAuth(GET_CATEGORIES)
        if (response.success && response.data) {
          setCategories(response.data)
        } else {
          console.error('Failed to fetch categories:', response.data)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

//   // Handle clicking outside to close dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

//   const handleCategorySelect = (category) => {
//     const isSelected = selectedCategories.some(selected => selected.id === category.id)
    
//     let updatedCategories
//     if (isSelected) {
//       // Remove category if already selected
//       updatedCategories = selectedCategories.filter(selected => selected.id !== category.id)
//     } else {
//       // Add category if not selected
//       updatedCategories = [...selectedCategories, category]
//     }
    
//     onCategoriesChange(updatedCategories)
//   }

  const getDisplayText = () => {
    if (selectedCategories.length === 0) {
      return 'Category'
    }
    return selectedCategories.map(category => category.name).join(', ')
  }

  const isCategorySelected = (categoryId) => {
    return selectedCategories.some(selected => selected.id === categoryId)
  }

  return (
    <div className="category-selection-field" ref={dropdownRef}>
      <div 
        className="category-input-container" 
        onClick={toggleDropdown}
      >
        <div className="category-display-text">
          {getDisplayText()}
        </div>
        <div className="dropdown-arrow">
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </div>
      </div>

      {isOpen && (
        <div className="category-dropdown">
          {loading ? (
            <div className="category-loading">Loading categories...</div>
          ) : categories.length === 0 ? (
            <div className="category-empty">No categories available</div>
          ) : (
            <div className="category-list">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`category-item ${isCategorySelected(category.id) ? 'selected' : ''}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  <span className="category-name">{category.name}</span>
                  {isCategorySelected(category.id) && (
                    <IoCheckmark className="check-icon" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CategorySelectionField