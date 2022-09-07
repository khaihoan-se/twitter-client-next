import React from 'react'
import ListLineIcon from '../icons/ListLineIcon';
import ProfileLineIcon from '../icons/ProfileLineIcon';
import ValuePhotoItem from './ValuePhotoItem';

interface PhotoProps {
    photos: any[];
    handleRemoveItem?: any;
}
const Photo = ({ photos, handleRemoveItem }: PhotoProps) => {    
    return (
        <div className='my-[4px] flex flex-col w-full'>
            <div className='w-full h-auto mt-[4px] relative'>
                {photos.length == 1 && (
                    <div className='relative overflow-hidden'>
                        <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} />
                        {/* http://localhost:5000/uploads/2022-08-30T16-32-51.322Z-b0facced7bbb3422678ff4c2a01ffe5e.jpg */}
                    </div>
                )}
                {photos.length == 2 && (
                    <div className='flex gap-[11px] items-center h-[290px]'>
                        <div className='relative w-1/2 h-full overflow-hidden'>
                            <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} className='h-full min-h-full object-cover' />
                        </div>
                        <div className='relative w-1/2 h-full overflow-hidden'>
                            <ValuePhotoItem image={`http://localhost:5000/${photos[1].filePath}`} handleRemoveItem={handleRemoveItem} index={1} className='h-full min-h-full object-cover' />
                        </div>
                    </div>
                )}
                {photos.length == 3 && (
                    <div className='flex gap-[11px] items-center h-[290px]'>
                        <div className='relative w-1/2 h-full overflow-hidden'>
                            <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} className='h-full min-h-full object-cover' />
                        </div>
                        <div className='w-1/2 h-full gap-[11px] flex justify-between flex-col'>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <ValuePhotoItem image={`http://localhost:5000/${photos[1].filePath}`} handleRemoveItem={handleRemoveItem} index={1} className='h-full min-h-full object-cover' />
                            </div>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <ValuePhotoItem image={`http://localhost:5000/${photos[2].filePath}`} handleRemoveItem={handleRemoveItem} index={2} className='h-full min-h-full object-cover' />
                            </div>
                        </div>
                    </div>
                )}
                {photos.length == 4 && (
                    <div className='flex gap-[11px] items-center h-[290px]'>
                        <div className='w-1/2 h-full gap-[11px] flex justify-between flex-col'>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <ValuePhotoItem image={`http://localhost:5000/${photos[0].filePath}`} handleRemoveItem={handleRemoveItem} index={0} className='h-full min-h-full object-cover' />
                            </div>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <ValuePhotoItem image={`http://localhost:5000/${photos[1].filePath}`} handleRemoveItem={handleRemoveItem} index={1} className='h-full min-h-full object-cover' />
                            </div>
                        </div>
                        <div className='w-1/2 h-full gap-[11px] flex justify-between flex-col'>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <ValuePhotoItem image={`http://localhost:5000/${photos[2].filePath}`} handleRemoveItem={handleRemoveItem} index={2} className='h-full min-h-full object-cover' />
                            </div>
                            <div className='h-[49%] w-full relative overflow-hidden'>
                                <ValuePhotoItem image={`http://localhost:5000/${photos[3].filePath}`} handleRemoveItem={handleRemoveItem} index={3} className='h-full min-h-full object-cover' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='mt-[4px] flex items-center'>
                <div className='flex items-center text-[13px] text-tt-subtext-color cursor-pointer mr-[46px]'>
                    <ProfileLineIcon className='w-[1.25em] h-[1.25em] mx-[4px]' />
                    <span className='hover:underline'>Tag People</span>
                </div>
                <div className='flex items-center text-[13px] text-tt-subtext-color cursor-pointer'>
                    <ListLineIcon className='w-[1.25em] h-[1.25em] mx-[4px]' />
                    <span className='hover:underline'>Add description</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Photo)