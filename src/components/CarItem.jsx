import React from 'react'
import { Separator } from "./ui/separator"
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { carImages } from './../../configs/schema';
import { Link, useParams } from 'react-router-dom';

function CarItem({car}) {
 
  return (
    <Link to={'/listing-details/'+car?.id}>
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
      <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white font-bold '>New</h2>
      <img src = {car?.images[0]?.imageUrl} width={400} className='rounded-t-xl h-[200px]'/>
      <div className='p-4'>
      <h2 className='font-bold text-black text-lg mb-2'>{car?.title}</h2>
      <Separator/>

      <div className='grid grid-cols-3 mt-5'>
        <div className='flex flex-col items-center'>
        <LuFuel  className='text-lg mb-2'/>
        <h2>{car?.mileage} Miles</h2>
        </div>
        <div className='flex flex-col items-center'>
        <IoSpeedometerOutline  className='text-lg mb-2'/>
        <h2>{car?.fuelType}</h2>
        </div>
        <div className='flex flex-col items-center'>
        <GiGearStickPattern className='text-lg mb-2' />
        <h2>{car?.transmission} </h2>
        </div>
      </div>

    <Separator className='my-2'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-md mb-6'>{car?.sellingPrice}</h2>
        <h2 className='text-primary text-sm flex gap-2 items-center p-1 pb-5'>
          View Details  <MdOpenInNew/> </h2>

      </div>
    </Separator>
      </div>
    
    </div>
    </Link>
  )
}

export default CarItem
