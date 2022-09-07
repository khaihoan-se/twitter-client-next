import React from 'react'
import Photo from './Photo'
import Video from './Video'

interface CardPostPhotoProps {
    images: any
}
const CardPostPhoto = ({ images }: CardPostPhotoProps) => {
    console.log(images)
    return (
        <div className='my-[4px] flex flex-col w-full'>
            {images.length > 0 && images[0].fileType === 'video/mp4' ? (
                <div className='flex items-center justify-center'>
                    <Video src={images[0].filePath} />
                </div>
            ) : <Photo photos={images} /> }
        </div>
    )
}

export default CardPostPhoto