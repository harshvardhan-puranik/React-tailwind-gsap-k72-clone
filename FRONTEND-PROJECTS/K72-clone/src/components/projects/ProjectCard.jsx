import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
          <div className='w-1/2 group relative transition-all hover:rounded-[50px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/50'>
              <h2 className='uppercase text-4xl text-white font-[font1] border-3 py-2 px-4 border-white rounded-full'>View Project</h2>
            </div>
          </div>
          <div className='w-1/2 group relative transition-all hover:rounded-[50px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/50'>
              <h2 className='uppercase text-4xl text-white font-[font1] border-3 py-2 px-4 border-white rounded-full'>View Project</h2>
            </div>
          </div>
        </>
  )
}

export default ProjectCard