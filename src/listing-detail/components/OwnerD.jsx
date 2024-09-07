import { Button } from '@/components/ui/button'
import React from 'react'

function OwnerD({card}) {
  return (
    <div className=' text-center p-10 border rounded-xl shadow-lg mt-3'>
      <div className='flex'>
      <img src={card?.userImageUrl} className='w-[70px] h-[70px] rounded-full ' alt="" />
      <h2 className='font-bold text-2xl mb-3 text-center px-60'>Owner Details</h2>
      </div>
     
      <h2 className='mt-2 font-bold text-xl'>{card?.username}</h2>
      <h2 className='mt-2 text-gray-400'>{card?.createdby}</h2>

      <Button className='w-full mt-6'>Message Owners</Button>
       
      
    </div>
  )
}

export default OwnerD
