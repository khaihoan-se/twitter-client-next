import React from 'react'

interface CardPostPhotoProps {
    images: any
}
const CardPostPhoto = ({ images }: CardPostPhotoProps) => {
    console.log(images)
    return (
        <div>CardPostPhoto</div>
    )
}

export default CardPostPhoto