import React from 'react'

function Description({card}) {
  return (
    <div>
      
      {card?.listing?<div className='p-5 rounded-xl bg-white shadow-lg mt-6 border'>
      <h2 className='my-2 font-medium text-xl'>Description</h2>
      <p>{card?.listing}</p>
    </div>:
    <div className='w-full h-[250px] bg-slate-100 mt-7 animate-pulse rounded-xl'>
    </div>
    }

    </div>
   
  )
}

export default Description
