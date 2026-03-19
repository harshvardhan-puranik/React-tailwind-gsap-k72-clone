import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1773906314~exp=1773909914~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=1688f210667836f0801140820b7724b12eca8b4b7065e0fca870e1a54cdb48a4&r=dXMtZWFzdDE%3D" muted loop autoPlay></video>
    </div>
  )
}

export default Video