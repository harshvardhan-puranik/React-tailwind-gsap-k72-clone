import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import gsap from 'gsap'
const projects = () => {
  const projects =
    [
      {
        image1: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
        image2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
      },
      {
        image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
        image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
      },
      {
        image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
        image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
      },
      {
        image1: 'https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd',
        image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
      },
      {
        image1: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',
        image2: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'
      },
      {
        image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
        image2: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'
      }
    ]
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
      gsap.from('.hero',{
        height:'100px',
        stagger:{
          amount:0.4
        },
        scrollTrigger:{
          trigger: '.parent',
          start:'top 10%',
          end:'top -350%',
          scrub:true
        }
      })
    })
  return (
    <div className='p-4 mb-[100vh]'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] text-[9.5vw] text-black uppercase'>Projects</h2>
      </div>
      <div className='lg:-mt-10 sm:-mt-5 mt-0 parent'>
        {projects.map(function(elem,idx){
          return <div key={idx} className='hero w-full lg:h-160 h-120 mb-4 flex gap-4'>
            <ProjectCard image1={elem.image1} image2={elem.image2}  />
          </div>
        })}
      </div>
    </div>
  )
}

export default projects