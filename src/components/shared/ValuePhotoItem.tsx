import classNames from 'classnames';
import React from 'react'
import { CgClose } from 'react-icons/cg' 

interface ValuePhotoItemProps {
    image: string;
    className?: string;
    handleRemoveItem: any;
    index: number;
}

const ValuePhotoItem = ({ image, className, handleRemoveItem, index }: ValuePhotoItemProps) => {
    return (
        <>
            <img src={image} alt='image' className={classNames('w-full h-full rounded-[16px]', className)} />
            <div className='absolute top-[4px] left-[4px] bg-[#0f1419bf] backdrop-blur-md min-h-[28px] min-w-[28px] rounded-full flex items-center justify-center cursor-pointer'
                onClick={() => handleRemoveItem(index)}
            >
                <CgClose className='text-[1rem] text-white' />
            </div>
        </>
    )
}

export default ValuePhotoItem