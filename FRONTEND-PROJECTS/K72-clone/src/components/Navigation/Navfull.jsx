import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RiCloseLargeLine } from '@remixicon/react'
import { RiHeart2Fill } from '@remixicon/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { useState } from 'react'
import RealTimeDate from '../common/RealTimeDate'

const Navfull = () => {

    const [navOpen, setnavOpen] = useContext(NavbarContext)
    const fullscreennav = useRef(null)
    const fullLinksNavRef = useRef(null)
    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.1,
            height: '100%',
            stagger: {
                amount: -0.4
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navLink', {
            opacity: 1
        })
        tl.to('.date', {
            opacity: 1
        })
    }
    function gsapreverseAnimation() {
        const tl = gsap.timeline()
        tl.to('.date', {
            opacity: 0
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navLink', {
            opacity: 0
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.4
            }
        })



        tl.to('.fullscreennav', {
            display: 'none',

        })

    }
    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        }
        else {

            gsapreverseAnimation()
        }
    }, [navOpen])

    return (

        <div ref={fullscreennav} id="fullscreennav" className='fullscreennav absolute hidden overflow-hidden z-50 w-full h-screen text-white font-[font2]'>
            <div className='fixed h-screen w-full'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullLinksNavRef} className='relative h-full w-full'>
                <div className='navLink h-2/10 border-b border-gray-400 flex w-full items-start p-5 justify-between'>
                    <div className='w-28 p-3'>
                        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div onClick={() => {
                        setnavOpen(false)
                    }} className='parent  h-28 w-28 relative cursor-pointer'>
                        <div className='child h-38 w-0.5 -rotate-45 origin-top absolute bg-white'></div>
                        <div className='child h-38 w-0.5 right-0 rotate-45 origin-top absolute bg-white'></div>
                    </div>
                </div>
                <div className='h-6/10'>
                    <Link to='/projects'>
                        <div className='link origin-top h-1/4 border-b border-gray-300 relative'>
                            <h1 className='h-full p-3 text-8xl text-center font-bold'>WORK</h1>
                            <div className='moveLink absolute bg-lime-300 h-full text-black flex top-0'>
                                <div className='moveX items-center flex'>
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>SEE EVERYTHING</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="1" />
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>SEE EVERYTHING</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="1" />
                                </div>
                                <div className='moveX items-center flex'>
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>SEE EVERYTHING</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="1" />
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>SEE EVERYTHING</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/agency'>
                        <div className='link origin-top h-1/4 border-b border-gray-300 relative'>
                            <h1 className='h-full p-3 text-8xl text-center font-bold'>AGENCY</h1>
                            <div className='moveLink absolute bg-lime-300 h-full text-black flex top-0'>
                                <div className='moveX items-center flex'>
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>know us</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="1" />
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>know us</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="1" />
                                </div>
                                <div className='moveX items-center flex'>
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>know us</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="1" />
                                    <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>know us</h2>
                                    <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className='link origin-top h-1/4 border-b border-gray-300 relative'>
                        <h1 className='h-full p-3 text-8xl text-center font-bold'>CONTACT</h1>
                        <div className='moveLink absolute bg-lime-300 h-full text-black flex top-0'>
                            <div className='moveX items-center flex'>
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>send us a fax</h2>
                                <div className='shrink-0 rounded-full h-20 w-60 object-cover'><RiHeart2Fill size={100} /></div>
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>send us a fax</h2>
                                <div className='shrink-0 rounded-full h-20 w-60 object-cover'><RiHeart2Fill size={100} /></div>
                            </div>
                            <div className='moveX items-center flex'>
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>send us a fax</h2>
                                <div className='shrink-0 rounded-full h-20 w-60 object-cover'><RiHeart2Fill size={100} /></div>
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>send us a fax</h2>
                                <div className='shrink-0 rounded-full h-20 w-60 object-cover'><RiHeart2Fill size={100} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top h-1/4 border-b border-gray-300 relative'>
                        <h1 className='h-full p-3 text-8xl text-center font-bold'>BLOG</h1>
                        <div className='moveLink absolute bg-lime-300 h-full text-black flex top-0'>
                            <div className='moveX items-center flex'>
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>read articles</h2>
                                <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="1" />
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>read articles</h2>
                                <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="1" />
                            </div>
                            <div className='moveX items-center flex'>
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>read articles</h2>
                                <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="1" />
                                <h2 className='whitespace-nowrap font-[font2] text-7xl uppercase text-center'>read articles</h2>
                                <img className='shrink-0 rounded-full h-20 w-60 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="1" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='date h-2/10 flex w-full items-end p-2 font-[font1] font-extralight uppercase text-[10px]'>
                    <div className=' w-1/3 text-4xl'><RealTimeDate /></div>
                    <div className='w-1/3 flex justify-center gap-2 text-sm py-2'>
                        <h3 className='hover:text-lime-300'><a href="#">Privacy Policy</a></h3>
                        <h3 className='hover:text-lime-300'><a href="#">Privacy Notice</a></h3>
                        <h3 className='hover:text-lime-300'><a href="#">Ethics Report</a></h3>
                        <h3 className='hover:text-lime-300'><a href="#">Consent Choices</a></h3>
                    </div>
                    <div className='w-1/3 flex justify-end gap-2'>
                        <h2 className='border-2 border-white hover:border-lime-300 hover:text-lime-300 rounded-full h-10 w-15 text-center text-4xl'>FB</h2>
                        <h2 className='border-2 border-white hover:border-lime-300 hover:text-lime-300 rounded-full h-10 w-15 text-center text-4xl'>IG</h2>
                        <h2 className='border-2 border-white hover:border-lime-300 hover:text-lime-300 rounded-full h-10 w-15 text-center text-4xl'>IN</h2>
                        <h2 className='border-2 border-white hover:border-lime-300 hover:text-lime-300 rounded-full h-10 w-15 text-center text-4xl'>BE</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navfull