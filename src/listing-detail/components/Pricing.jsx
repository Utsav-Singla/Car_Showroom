import { Button } from '@/components/ui/button'
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";

function Pricing({card}) {
  return (
    <div className=' mt-10 p-10 rounded-xl border shadow-lg'>
       <h2>Our Price</h2>
       <h2 className='font-bold text-3xl'>${card?.sellingPrice}</h2>
       <Button className='w-full mt-7' size="lg"> <MdOutlineLocalOffer className='text-lg mr-2'/> Make An Offer Price</Button>
    </div>
  )
}

export default Pricing
