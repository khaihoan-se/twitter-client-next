import React from 'react'
import ReactPlayer from 'react-player'

interface VideoProps {
    src: string
}
const Video: React.FC<VideoProps> = ({ src }) => {
    return (
        <div>
            <ReactPlayer 
                url={`http://localhost:5000/${src}`}
                muted={false}
                playing={false}
                controls={true}
                className='react-player-video'
            />
        </div>
    )
}

export default Video