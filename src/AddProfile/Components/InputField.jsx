import { Input } from '@/components/ui/input'
import React from 'react'

function InputField({item,handleInputChange,car}) {
  return (
    <div className='hover:shadow-lg'>
      <Input type={item?.fieldType} name={item?.name} required={item.required}
      defaultValue = {car?.[item.name] || ''}
      onChange = {(e)=>handleInputChange(item.name,e.target.value)}/>
    </div>
  )
}

export default InputField
