import Header from '@/components/Header'
import Search from '@/components/Search'
import { db } from './../../../configs';
import { carImages, carListing } from './../../../configs/schema';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem';

function SearchByCategory() {
  const {category} = useParams();
  const [carlist,setcarlist] = useState([]);

  useEffect(()=>{
    getcarlist();
  },[])

  const getcarlist = async() => {
    const result = await db.select().from(carListing)
    .innerJoin(carImages,eq(carListing.id,carImages.carListingId))
    .where(eq(carListing.category,category))

    const resp = Service.formatresult(result);
     setcarlist(resp);
  }
  return (
    <div>
      <Header/>
      <div className='p-10 bg-black flex justify-center'>
        <Search/>
      </div>
      <div className='p-5 md:p-10'>
        <h2 className='font-bold text-4xl'>{category}</h2>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
         {carlist?.length>0?carlist.map((item,index)=>(
          <div key={index}>
               <CarItem car={item} />
            </div>
         )):
         [1,2,3,4,5,6].map((item,index)=>(
          <div className='h-[260px] rounded-xl bg-slate-200 animate-pulse'>

          </div>
         ))}
         </div>
        
      </div>
    </div>
  )
}

export default SearchByCategory
