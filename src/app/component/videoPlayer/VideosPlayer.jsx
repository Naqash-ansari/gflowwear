import React from 'react';
import url from '../../assets/video/bjj.mp4'

// Render a YouTube video player
const VideosPlayer = () => {
  return (
    <div>
      VideosPlayer
      {/* // Only loads the YouTube player */}
      <video width="640" height="360" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default VideosPlayer