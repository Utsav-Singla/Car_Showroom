import React from 'react'
import carDetails from './../../Shared/carDetails.json'

function Specification({card}) {
  return (
    <div className='p-10 rounded-xl border shadow-lg mt-7'>
      <h2 className='text-3xl font-bold mb-6'>Specifications</h2>
              {card?carDetails.carDetails.map((item, index) => (
                <div key={index} className=''>
                  <li className='mb-2'>
                  <label className='text-lg font-bold my-5'>
                    {item?.label}
                  </label>
                  </li>
                 
                </div>
              )):
              <div className='w-full h-[500px] rounded-xl bg-slate-200 animate-pulse'>
              </div>
}
            </div>
  )
}

export default Specification
