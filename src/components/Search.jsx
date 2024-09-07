import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { IoSearch } from "react-icons/io5";
import Data from '../Shared/Data';
import { Link } from 'react-router-dom';

function Search() {
  
  const [cars,setcars] = useState();
  const [make,setmake] = useState();
  const [price,setprice] = useState();  
  
  return (
    <div className='p-2 md:p-4 bg-white rounded-md md:rounded-full flex-col 
    md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
      <Select onValueChange={(value)=>setcars(value)}>
  <SelectTrigger className="outline-none md:border-none w-full hover:shadow-md text-lg">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="New">New</SelectItem>
    <SelectItem value="Old">Old</SelectItem>
    <SelectItem value="Certified-Pre-used">Certified-Pre-used</SelectItem>
  </SelectContent>
</Select> 
<Separator orientation="vertical" className = "hidden md:block" />

<Select onValueChange={(value)=>setmake(value)}>
  <SelectTrigger className="outline-none md:border-none w-full  hover:shadow-md text-lg">
    <SelectValue placeholder=" Makes" />
  </SelectTrigger>
  <SelectContent>
    {Data.CarMakes.map((maker,index)=>(<SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>))}
  </SelectContent>
</Select>

<Separator orientation="vertical" className = "hidden md:block" />

<Select onValueChange={(value)=>setprice(value)}>
  <SelectTrigger className="outline-none md:border-none w-full hover:shadow-md text-lg">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
    {Data.Pricing.map((maker,index)=>(<SelectItem key={index} value={maker.amount}>{maker.amount}</SelectItem>))}
  </SelectContent>

  
</Select>
<Link to = {'/search?cars='+cars+"&make="+make+"&price="+price}>
 <IoSearch className=' p-1 text-[30px] bg-primary rounded-full text-[#dbd4d4] hover:scale-105 transition-all cursor-pointer'/>
</Link>
    </div>
  )
}

export default Search
