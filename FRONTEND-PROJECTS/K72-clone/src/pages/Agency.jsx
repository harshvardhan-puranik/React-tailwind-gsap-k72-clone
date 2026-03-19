import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Agency = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imgArray = ['https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
                    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
                    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
                    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
                    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
                    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
                    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
                    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ]

  
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(
    function(){
      gsap.to(imageDivRef.current,{
        scrollTrigger:{
          trigger: imageDivRef.current,
          start:'top 16%',
          end:'top -140%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (elem) => {
            let imageIndex;
            if(elem.progress<1){
              imageIndex = Math.floor(elem.progress*imgArray.length)
            }else{
              imageIndex = imgArray.length-1
            }
              
              imageRef.current.src = imgArray[imageIndex]
          }
        }
      })
    }
  )
  return (
    <div>
      <div className='section1 relative py-1'>
        <div ref={imageDivRef} className='absolute  h-[20vw] w-[15vw]  lg:top-60 sm:top-80 top-90 left-[30vw] lg:rounded-3xl rounded-2xl overflow-hidden'>
          <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='font-[font2] relative'>
          <div className='mt-[55vh]'>
            <h1 className='lg:text-[19vw] sm:text-[17vw] text-[15vw] text-center lg:leading-[17vw] sm:leading-[15vw] leading-[12vw] uppercase'>SEVEN7Y <br />
              TWO</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='lg:text-6xl text-4xl'>&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'>

      </div>
    </div>
  )
}

export default Agency