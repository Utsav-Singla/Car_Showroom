import InputField from '@/AddProfile/Components/InputField'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { min } from 'drizzle-orm';
import React, { useState } from 'react'

function FinancialCalc({card}) {

  const [cp,setcp] = useState(0);
  const [i,seti] = useState(0);
  const [lt,setlt] = useState(0);
  const [dp,setdp] = useState(0);
  const [mp,setmp] = useState(0);

  const calculatep =() => {
    const principal = cp-dp;
    const minterest = i/1200;
    const mp = (principal*minterest*Math.pow(1+minterest,lt)/Math.pow(1+minterest,lt)-1);
    setmp(mp.toFixed(2));
    console.log(mp);
  }
  return (
    <div>
      <div className='p-10 border rounded-xl shadow-md mt-7'>
        <h2 className='font-bold text-3xl'>
          Financial Calculator
        </h2>

        <div className='flex gap-5 mt-5'>
          <div className='w-full'>
            <label>Price $</label>
            <Input type="number" onChange = {(e)=>setcp(e.target.value)}/>
          </div>

          <div className='w-full'>
            <label>Interest Rate</label>
            <Input type='number' onChange = {(e)=>seti(e.target.value)}/>
          </div>
          
        </div>
        <div className='flex gap-5 mt-3'>
          <div className='w-full'>
            <label>Loan Term (Months) </label>
            <Input type="number" onChange = {(e)=>setlt(e.target.value)}/>
          </div>

          <div className='w-full'>
            <label>Down Payment</label>
            <Input type='number' onChange = {(e)=>setdp(e.target.value)}/>
          </div>
          
        </div>

        {mp>0 &&<h2 className='font-bold text-2xl mt-5'>Your Monthly Payment Is : <span className='text-2xl'>{mp}</span></h2>}
        <Button className='w-full mt-3 text-md font-bold'size="lg" onClick = {calculatep}>Calculate</Button>
      </div>
    </div>
  )
}

export default FinancialCalc
