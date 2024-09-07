import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './Components/InputField'
import DropDown from './Components/DropDown'
import TextArea from './Components/TextArea'
import { Separator } from './../components/ui/separator'
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { carImages, carListing } from './../../configs/schema'
import UploadImages from './Components/UploadImages'
import { LuLoader2 } from "react-icons/lu";
import { toast } from 'sonner'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Service from '@/Shared/Service'
import { eq } from 'drizzle-orm'

function AddProfile() {
  const [formdata,setformdata] = useState({});
  const [t,st] = useState();
  const [l,sl] = useState(false);
  const navigate = useNavigate();;
  const {user} = useUser();
  const [searchparam] = useSearchParams();

  const [carinfo , setinfo] = useState();

  const mode = searchparam.get('mode');
  const recordid = searchparam.get('id')

  useEffect(()=>{
    if(mode=='edit')
    {
      getdetail();
    }
  },[])

  const getdetail = async() => {
    const result = await db.select().from(carListing).
    innerJoin(carImages,eq(carListing.id,carImages.carListingId)).
    where(eq(carListing.id,recordid))

    const resp = Service.formatresult(result);
    console.log(result);
    setformdata(resp[0]);
    setinfo(resp[0]);
  }
  /**
   * Handle input changes for form fields
   * @param {string} name 
   * @param {string|number} value 
   */
  const handleInputChange = (name, value) => {
    setformdata((prevdata) => ({
      ...prevdata, [name]: value
    }));
  };

  const onSubmit = async (e) => {
    sl(true);
    e.preventDefault();
    toast('Please Wait')

    if(mode=='edit')
    {
        const result = await db.update(carListing).set({
          ...formdata,
            createdby:user?.primaryEmailAddress?.emailAddress,
            postedon:Date.now()
          
        }).where(eq(carListing.id,recordid)).returning({id:carListing.id});
        navigate('/profile');
        sl(false);
    }
    else{
    try {
      const result = await db.insert(carListing).values({...formdata,
        createdby:user?.primaryEmailAddress?.emailAddress,
        username:user?.fullName,
        userImageUrl:user?.imageUrl,
        postedon:Date.now()
      }).returning({id:carListing.id});

      if (result) {
        console.log("Data saved");
        st(result[0]?.id)
        sl(false)
      }
    } catch (e) {
      console.log("Error", e);
    }
  }
  };


  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Profile</h2>
        <form className='p-10 border rounded-xl mt-10'>
          <div>
            <h2 className='font-medium text-xl mb-6 '>Car Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className='text-sm'>
                    {item?.label}{item.required && <span className='text-red-500'>*</span>}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number'
                    ? <InputField item={item} handleInputChange={handleInputChange} car = {carinfo} />
                    : item.fieldType === 'dropdown'
                      ? <DropDown item={item} handleInputChange={handleInputChange} car = {carinfo}/>
                      : item.fieldType === 'textarea'
                        ? <TextArea item={item} handleInputChange={handleInputChange} carinfo = {carinfo} />
                        : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className='my-6'/>
          {/* car image */}
          <UploadImages t={t} carinfo = {carinfo} mode = {mode} sl={(v)=>{sl(v);navigate('/profile')} }/>
           
          <div className='mt-10 flex justify-end'>
           <Button type="button"
           disabled={l} 
           onClick={(e)=>onSubmit(e)}>
             {!l?'Submit':<LuLoader2 className='animate-spin text-lg' />}
            </Button>


          </div>
        </form>
       
      </div>
    </div>
  );
}

export default AddProfile;
