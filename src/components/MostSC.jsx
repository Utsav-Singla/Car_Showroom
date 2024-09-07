import React, { useEffect, useState } from 'react'
import CarItem from './CarItem';
import Service from '@/Shared/Service'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { db } from './../../configs'
import { carImages, carListing } from './../../configs/schema'
import { desc, eq } from 'drizzle-orm'

function MostSC() {
  const [carl,setcarl] = useState([]);

  useEffect(()=>{
    getlist();
  },[])

  const getlist = async() => {
    const result = await db.select().from(carListing)
    .leftJoin(carImages,eq(carListing.id,carImages.carListingId))
    .orderBy(desc(carListing.id))
    .limit(7);
  
    const resp = Service.formatresult(result);
    setcarl(resp);
  }
  return (
    <div className='mx-10 mb-6'>
      <h2 className='font-bold text-3xl text-center my-16 mt-16 mb-7' >
        MOST SEARCHED CARS
      </h2>
      <Carousel>
  <CarouselContent>
  {carl.map((car,index)=>(
       <CarouselItem key={index} className="basis-1/4"><CarItem key={index} car={car}/></CarouselItem>
      ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
  )
}

export default MostSC
