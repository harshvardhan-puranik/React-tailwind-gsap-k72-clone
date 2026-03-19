import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
          <div className='w-1/2 group relative transition-all lg:hover:rounded-[50px] hover:rounded-[25px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 h-full w-full flex items-center justify-center bg-black/50'>
              <h2 className='uppercase lg:text-4xl sm:text-1xl text-xs text-white font-[font1] lg:border-3 border lg:py-2 lg:px-4 py-1 px-2 border-white rounded-full'>View Project</h2>
            </div>
          </div>
          <div className='w-1/2 group relative transition-all lg:hover:rounded-[50px] hover:rounded-[25px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/50'>
              <h2 className='uppercase lg:text-4xl sm:text-1xl text-xs text-white font-[font1] lg:border-3 border lg:py-2 lg:px-4 py-1 px-2 border-white rounded-full'>View Project</h2>
            </div>
          </div>
        </>
  )
}

export default ProjectCard