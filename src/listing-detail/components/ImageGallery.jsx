import React from 'react'

function ImageGallery({card}) {
  return (
    <div>
      
      <img src={card?.images[0].imageUrl} className='w-full h-[400px] object-cover rounded-xl' alt="" />
    </div>
  )
}

export default ImageGallery
