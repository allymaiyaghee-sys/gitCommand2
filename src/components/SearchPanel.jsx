import React from 'react'

const SearchPanel = ({ isOpen }) => {
    if (!isOpen) return null;


  return (
        <div className="absolute top-full right-0 mt-2 w-80 h-80 bg-white shadow-lg p-4 rounded-lg">
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full border border-blue-950 p-2 rounded"
      />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quidem alias at ex nisi laudantium consequuntur! Dicta doloremque quaerat voluptatum saepe possimus porro sunt totam ipsa quod qui eveniet autem impedit deleniti temporibus dolor, corrupti laudantium. Nesciunt quaerat eaque minus.
    </div>
  )
}

export default SearchPanel