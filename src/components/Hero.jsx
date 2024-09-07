import React from 'react'
import Search from './Search'
import { PaddingIcon } from '@radix-ui/react-icons'

function Hero() {
  return (
    <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
      <h2 className='text-lg'>Find cars for sale and rent near you</h2>
      <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>
      <Search/>
      <img  src="/Hcar.png" alt="" className=' relative m-1 h-[300px]'  />
    </div>
  )
}

export default Hero
