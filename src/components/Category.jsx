import React from 'react'
import Data from '../Shared/Data'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='mt-24'>
     <h2 className='font-bold text-4xl text-center mb-6 mt-1'> Browse By Type</h2>  

      <div className='grid  grid-cols-5 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 py-10 px-20 gap-10'>
      {Data.Category.map((category,index)=>(
        <Link to = {'/search/'+category.name}>
        <div key={index} className='border-gray-500rounded-xl items-center p-3 flex flex-col shadow-lg cursor-pointer'>
          <img src={category.icon} width={120} height = {100} alt="" className='hover:shadow-lg h-[150px]' />
          <h2>{category.name}</h2>
          </div>
          </Link>
      ))}
    </div>    
    </div>
  )
}

export default Category
