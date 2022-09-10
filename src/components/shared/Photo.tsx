import React, { useState } from 'react'
import ListLineIcon from '../icons/ListLineIcon';
import ProfileLineIcon from '../icons/ProfileLineIcon';
import ValuePhotoItem from './ValuePhotoItem';
import classNames from 'classnames';

interface PhotoProps {
    photos: any[];
    handleRemoveItem?: any;
}
const Photo = ({ photos, handleRemoveItem }: PhotoProps) => {
    const [ imageHeight, setImageHeight ] = useState<number>(520)
    const onImgLoad = ({ target: img }: any) => {
        const { offsetHeight, offsetWidth } = img;
        setImageHeight(offsetHeight)
    };  
    return (
        <div className='my-[4px] flex flex-col w-full'>
            <div className='w-full h-auto mt-[4px] relative'>
                {photos.length == 1 && (
                    <div className={classNames(
                        'relative overflow-hidden rounded-2xl self-start',
                        imageHeight > 510 ? 'max-h-[510px] max-w-[382.5px]' : ''
                    )}>
                        <img src={`http://localhost:5000/${photos[0].filePath}`} onLoad={onImgLoad} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />

                        {/* <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} /> */}
                        {/* http://localhost:5000/uploads/2022-08-30T16-32-51.322Z-b0facced7bbb3422678ff4c2a01ffe5e.jpg */}
                    </div>
                )}
                {photos.length == 2 && (
                    <div className='flex gap-[11px] items-center h-[290px]'>
                        <div className='relative w-1/2 h-full overflow-hidden'>
                            <img src={`http://localhost:5000/${photos[0].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                            {/* <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} className='h-full min-h-full object-cover' /> */}
                        </div>
                        <div className='relative w-1/2 h-full overflow-hidden'>
                            <img src={`http://localhost:5000/${photos[1].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                            {/* <ValuePhotoItem image={`http://localhost:5000/${photos[1].filePath}`} handleRemoveItem={handleRemoveItem} index={1} className='h-full min-h-full object-cover' /> */}
                        </div>
                    </div>
                )}
                {photos.length == 3 && (
                    <div className='flex gap-[11px] items-center h-[290px]'>
                        <div className='relative w-1/2 h-full overflow-hidden'>
                            <img src={`http://localhost:5000/${photos[0].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                            {/* <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} className='h-full min-h-full object-cover' /> */}
                        </div>
                        <div className='w-1/2 h-full gap-[11px] flex justify-between flex-col'>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <img src={`http://localhost:5000/${photos[1].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                                {/* <ValuePhotoItem image={`http://localhost:5000/${photos[1].filePath}`} handleRemoveItem={handleRemoveItem} index={1} className='h-full min-h-full object-cover' /> */}
                            </div>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <img src={`http://localhost:5000/${photos[2].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                                {/* <ValuePhotoItem image={`http://localhost:5000/${photos[2].filePath}`} handleRemoveItem={handleRemoveItem} index={2} className='h-full min-h-full object-cover' /> */}
                            </div>
                        </div>
                    </div>
                )}
                {photos.length == 4 && (
                    <div className='flex items-center h-[290px]'>
                        <div className='w-1/2 h-full flex justify-between flex-col'>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <img src={`http://localhost:5000/${photos[0].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                                {/* <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} className='h-full min-h-full object-cover' /> */}
                            </div>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <img src={`http://localhost:5000/${photos[1].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                                {/* <ValuePhotoItem image={`http://localhost:5000/${photos[1].filePath}`} handleRemoveItem={handleRemoveItem} index={1} className='h-full min-h-full object-cover' /> */}
                            </div>
                        </div>
                        <div className='w-1/2 h-full gap-[11px] flex justify-between flex-col'>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <img src={`http://localhost:5000/${photos[2].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                                {/* <ValuePhotoItem image={`http://localhost:5000/${photos[2].filePath}`} handleRemoveItem={handleRemoveItem} index={2} className='h-full min-h-full object-cover' /> */}
                            </div>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <img src={`http://localhost:5000/${photos[3].filePath}`} alt='image' className='w-full rounded-[16px] h-full min-h-full object-cover photo--border' />
                                {/* <ValuePhotoItem image={`http://localhost:5000/${photos[3].filePath}`} handleRemoveItem={handleRemoveItem} index={3} className='h-full min-h-full object-cover' /> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(Photo)