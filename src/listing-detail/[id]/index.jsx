import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams, useSearchParams } from 'react-router-dom';
import { db } from './../../../configs';
import { carImages, carListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import ImageGallery from '../components/ImageGallery';
import Description from '../components/Description';
import Pricing from '../components/Pricing';
import Specification from '../components/Specification';
import OwnerD from '../components/OwnerD';
import Footer from '@/components/Footer';
import FinancialCalc from '../components/FinancialCalc';
import MostSC from '@/components/MostSC';

function LISTING() {
  const {id} = useParams();
  const [card,setcard] = useState();

  useEffect(()=>{getd();},[])
  const getd = async()=>{
    const result = await db.select().from(carListing)
    .innerJoin(carImages,eq(carListing.id,carImages.carListingId))
    .where(eq(carListing.id,id));

    const resp = Service.formatresult(result);
     setcard(resp[0]);
  }
  return (
    <div>
      <Header/>
       <div className='p-5 md:px-10'>
        <DetailHeader card = {card}/>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          
          <div className='md:col-span-2 mt-10 gap-5'>
           
           <ImageGallery card={card}/>
           <Description card = {card}/>
           <OwnerD card={card} />
          </div>

          <div className=''>
           <Pricing card = {card}/>
           <Specification card={card}/>
           
          </div>


        </div>

        <FinancialCalc card={card} />
       </div>
       <MostSC/>
       <Footer/>
    </div>
  )
}

export default LISTING
