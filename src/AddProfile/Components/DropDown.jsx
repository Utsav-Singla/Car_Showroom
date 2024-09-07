import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function DropDown({item,handleInputChange,car}) {
  return (
    <div>
      <Select onValueChange={(value)=>handleInputChange(item.name,value)} required={item.required}
     defaultValue={car?.[item?.name]}>
  <SelectTrigger className="w-full hover:shadow-lg">
    <SelectValue placeholder={car?.[item?.name]?car?.[item?.name]:item.label}/>
  </SelectTrigger>
  <SelectContent>
   {item?.options?.map((option,index)=>(<SelectItem key={index} value={option}>{option}</SelectItem>))}
  </SelectContent>
</Select>

    </div>
  )
}

export default DropDown
