
import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function TextArea({item,handleInputChange,carinfo}) {
  return (
    <div className='hover:shadow-lg'>
      <Textarea onChange={(e)=>handleInputChange(item.name,e.target.value)} required={item.required} defaultValue = {carinfo?.[item?.name]}/>
    </div>
  )
}

export default TextArea
