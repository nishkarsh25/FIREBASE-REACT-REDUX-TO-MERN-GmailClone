import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Body = () => {
  const {authUser} = useSelector(store=>store.app);
  const navigate = useNavigate()

  useEffect(()=>{
    if(!authUser)
      {
        navigate("/login")
      }
  })
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body