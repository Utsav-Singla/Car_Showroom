import { carImages, carListing } from './../../../configs/schema';
import { storage } from './../../../configs/firebaseconfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
//import { Button } from '@/components/ui/button'
import { db } from './../../../configs'
import { eq } from 'drizzle-orm';

function UploadImages({t,sl,carinfo,mode}) {
  const [fileselect,setfileselect] = useState([]);``
  const [ex,setex] = useState([]);
   
  useEffect(()=>{
    if(mode=='edit')
    {
      setex([]);
      carinfo?.images.forEach((image)=>{
        setex(prev=>[...prev,image?.imageUrl])
        console.log(image);
      })

    }
  },[carinfo])


  useEffect(()=>{
    if(t)
    {
     uploadImage();
    }
  },[t])

  const onfileselectd = (e) =>
  {
   const files = e.target.files;
   
   for(let i = 0 ; i < files?.length;i++)
   {
    const file = files[i];
    setfileselect((prev)=>[...prev,file])
    
   }
  }

  const onclose = (image,index) => {
   const result = fileselect.filter((item)=>item!=image)
   setfileselect(result);
  }
  
  const onclosedb = async(image,index) => {
   const result = await db.delete(carImages).where(eq(carImages.id,carinfo?.images[index]?.id))

   const imagel = ex.filter(item=>item!=image);
   setex(imagel);

  }
  
  const uploadImage = async() => {
    sl(true);
   await fileselect.forEach((file)=>{
      const filename = Date.now()+'.jpeg';
      const storageref = ref(storage,'car/'+filename);
      const metadata = {
        contentType:'image/jpeg'
      }
      uploadBytes(storageref,file,metadata).then((snapShot)=>{
        console.log('uploaded file');
      }).then(resp=>{
        getDownloadURL(storageref).then(async(downlaodurl)=>
        {
          console.log(downlaodurl);
          await db.insert(carImages).values({
            imageUrl:downlaodurl,
            carListingId:t
          })
        })
      })
   sl(false)
    })
  }
  return (
    <div>
      <h2 className='font-medium text-xl my-3'>Upload Images</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

        {mode=='edit' &&
         ex.map((image,index)=>(
          <div key = {index}>
            <h2><IoClose className='absolute m-2 font-bold border rounded-xl border-black bg-black text-white text-sm '  onClick={()=>onclosedb(image,index)} /></h2>
            <img src={image} className='w-[90%] h-[105px] rounded-xl' alt="" />
          </div>
         )) 
        }

          {fileselect.map((image,index)=>(
          <div key = {index}>
            <h2><IoClose className='absolute m-2 font-bold border rounded-xl border-black bg-black text-white text-sm '  onClick={()=> onclose(image,index)} /></h2>
            <img src={URL.createObjectURL(image)} className='w-[90%] h-[105px] rounded-xl' alt="" />
          </div>
         )) }



        <label htmlFor="upload-images">
          <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-9 cursor-pointer hover:shadow-lg'>
            <h2 className='text-lg text-center text-primary'>+</h2>
          </div>
        </label>
        <input type="file" multiple={true} id='upload-images' onChange = {onfileselectd} className='opacity-0 '/>
      </div>
    </div>
  )
}

export default UploadImages
