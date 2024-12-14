import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-md flex justify-end'>
      <Image className= 'text-left' src={'/remindlearn.svg'} alt='logo' width={300} height={300}/>
      <UserButton/>
    </div>
  )
}

export default DashboardHeader
