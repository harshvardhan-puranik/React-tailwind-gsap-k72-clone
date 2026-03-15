import React from 'react'
import { RiMenuLine } from '@remixicon/react'

const Navbar = () => {
  return (
    <div>
        <div className="h-1/10 w-screen z-10 fixed text-white flex justify-between">
            <div className='p-2 w-37.5 h-37.5'><img className='h-100% w-100% bg-cover' src="src\assets\output-onlinepngtools.png" alt="" /></div>
            <div className=''><RiMenuLine /></div>
        </div>
    </div>
  )
}

export default Navbar