import React from 'react'
import { Link } from 'react-router-dom'
const Homebottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <Link className='lg:text-[6.5vw] sm:text-[4vw] text-[3vw] hover:border-lime-300 hover:text-lime-300 border-white border-3 px-8 leading-[6vw] m-3 pt-[1vw] rounded-full uppercase' to='/projects'>Projects</Link>
        <Link className='lg:text-[6.5vw] sm:text-[4vw] text-[3vw] hover:border-lime-300 hover:text-lime-300 border-white border-3 px-8 leading-[6vw] m-3 pt-[1vw] rounded-full uppercase' to='/agency'>Agence</Link>
    </div>
  )
}

export default Homebottomtext