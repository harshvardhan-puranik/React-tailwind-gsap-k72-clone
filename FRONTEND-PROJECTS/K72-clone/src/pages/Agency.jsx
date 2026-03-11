import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Agency = () => {
  const imageDivRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(
    function(){
      gsap.to(imageDivRef.current,{
        scrollTrigger:{
          trigger: imageDivRef.current,
          markers: true
        }
      })
    }
  )
  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='absolute  h-[20vw] w-[15vw]  top-50 left-[30vw] rounded-3xl overflow-hidden'>
          <img className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='font-[font2] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center leading-[17vw] uppercase'>SEVEN7Y <br />
              TWO</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'>

      </div>
    </div>
  )
}

export default Agency