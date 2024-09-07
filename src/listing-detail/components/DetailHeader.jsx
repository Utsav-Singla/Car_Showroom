import React from 'react'
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";

function DetailHeader({card}) {
  return (

    <div>
    
  {card?.title?<div>
      <h2 className='font-bold text-3xl text-center'>
        {card?.title}</h2>
        <p className='text-sm text-center'>{card?.tagline}</p>

        <div className='flex gap-3 mt-3 justify-center'>

        <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 '>
        <FaRegCalendarAlt className='h-5 w-5 text-primary text-center'/>
        <h2 className='text-primary text-sm'>{card?.year}</h2>
        </div>

        <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
        <IoSpeedometerOutline className='h-5 w-5 text-primary'/>
        <h2 className='text-primary text-sm'>{card?.mileage}</h2>
        </div>

        <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
        <GiGearStickPattern  className='h-5 w-5 text-primary'/>
        <h2 className='text-primary text-sm'>{card?.transmission}</h2>
        </div>

        <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
        <MdLocalGasStation   className='h-5 w-5 text-primary'/>
        <h2 className='text-primary text-sm'>{card?.fuelType}</h2>
        </div>
         

        </div> 
    </div>:
     <div className='w-full rounded-xl h-[100px] bg-slate-200 animate-pulse'>
    </div>}

   
    </div>
  
  )
}

export default DetailHeader
