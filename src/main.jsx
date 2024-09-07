import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import {ClerkProvider} from '@clerk/clerk-react'
import Profile from './profile'
import AddProfile from './AddProfile'
import { Toaster } from './components/ui/sonner'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import LISTING from './listing-detail/[id]'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/contact',
    element : <Contact/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/AddProfile',
    element:<AddProfile/>
  },
  {
    path: '/search/:category',
    element: <SearchByCategory/>
  },
  {
    path:'/search',
    element:<SearchByOptions/>
  },
  {
    path:'/listing-details/:id',
    element:<LISTING/>
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <RouterProvider router = {router}/>
     <Toaster />
    </ClerkProvider>
  </StrictMode>,
)
