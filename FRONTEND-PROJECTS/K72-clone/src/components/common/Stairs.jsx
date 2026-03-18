import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Stairs = (props) => {
    const stairRef = useRef(null)
    const currentPath = useLocation().pathname
    const pageRef = useRef(null)
    useGSAP(function () {
    const tl = gsap.timeline()
    tl.to(stairRef.current, {
      display: 'block'
    })
    tl.from('.stairs', {
      height: 0,
      stagger: {
        amount: -0.25
      }
    })
    tl.to('.stairs', {
      y: '100%',
      stagger: {
        amount: -0.25
      }
    })
    tl.to(stairRef.current, {
      display: 'none'
    })
    tl.to('.stairs', {
      y: '0%',
    })
    gsap.from(pageRef.current,{
        opacity:0,
        delay:1.3,
        scale:1.2
    })
    
  },[[currentPath]])

    return (
        <div>
            <div ref={stairRef} className='h-screen w-full fixed z-20'>
                <div className='h-full w-full flex'>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs