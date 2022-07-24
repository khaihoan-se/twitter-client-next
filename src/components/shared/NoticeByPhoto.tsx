import React from 'react'

interface NoticeByPhotoProps {
    notification: string; 
}
const NoticeByPhoto = ({ notification }: NoticeByPhotoProps) => {
    return (
        <React.Fragment>
            <div className='min-h-[40px] bg-tt-main-color text-white py-[10px] px-[15px] rounded-md absolute bottom-10 left-1/2 translate-x-[-50%] z-50'>{notification}</div>
        </React.Fragment>
    )
}

export default NoticeByPhoto