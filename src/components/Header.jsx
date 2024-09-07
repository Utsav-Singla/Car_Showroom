import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button.jsx';
import { Link } from 'react-router-dom'
function Header() {
  
  const {user,isSignedIn} = useUser();

  return (
    <div className='flex justify-between items-center shadow-sm p-1'>
      <img src='/images.png' width={100} height={50} />
      <ul className='hidden md:flex gap-16'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>PreOwned</li>
      </ul>
      
      {isSignedIn?<div className='flex items-center gap-5'>
        <UserButton/>
        <Link to={'/profile'}>
        <Button>Submit</Button>
        </Link>
        </div>:<SignInButton mode="modal" forceRedirectUrl='/'><Button> Submit</Button></SignInButton>}

    </div>
  )
}

export default Header
