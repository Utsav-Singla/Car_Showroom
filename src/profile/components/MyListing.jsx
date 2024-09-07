import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link} from 'react-router-dom'
import { db } from './../../../configs'
import { carImages, carListing } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import CarItem from '@/components/CarItem'
import Service from '@/Shared/Service'
import { FaRegTrashAlt } from "react-icons/fa";

function MyListing() {
 
  const [carl,setcar] = useState([])
  const {user} = useUser();
  
  useEffect(()=>{
    user&&getuser();
  }
  ,[user])

  const getuser = async() => {
    const result = await db.select().from(carListing)
    .leftJoin(carImages,eq(carListing.id,carImages.carListingId))
    .where(eq(carListing.createdby,user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(carListing.id));

  const resp = Service.formatresult(result);
    console.log(resp);
    setcar(resp);
  }
  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-4xl'>Profiles</h2>
        <Link to={'/AddProfile'}>
        <Button>Add Profile</Button>
        </Link>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
          {
            carl.map((item,index)=>(
              
              <div key={index}>
              <CarItem car={item}/>
              <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
                <Link to = {'/addprofile?mode=edit&id='+item?.id} className='wifull'>
                <Button variant="outline" className='w-full'>
                  Edit
                </Button>
                </Link>
                <Button variant="destructive">
                <FaRegTrashAlt />
                </Button>
              </div>
              </div>
            ))
        }
        </div>
    </div>
  )
}

export default MyListing
