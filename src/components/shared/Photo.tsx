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
                {/* 1 photo */}
                {photos.length == 1 && (
                    <div className={classNames(
                        'border-[1px] border-tt-border-color relative overflow-hidden rounded-2xl self-start bg-white',
                        imageHeight > 510 ? 'max-h-[510px] max-w-[382.5px]' : ''
                    )}>
                        <img src={`http://localhost:5000/${photos[0].filePath}`} onLoad={onImgLoad} alt='image' className='w-full h-full min-h-full object-cover' />
                    </div>
                )}
                {/* 2 photo */}
                {photos.length == 2 && (
                    <div className='rounded-2xl overflow-hidden flex items-center h-[290px] border-[1px] border-tt-border-color'>
                        <div className='relative w-1/2 h-full overflow-hidden mr-[2px] bg-white'>
                            <img src={`http://localhost:5000/${photos[0].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                        </div>
                        <div className='relative w-1/2 h-full overflow-hidden bg-white'>
                            <img src={`http://localhost:5000/${photos[1].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                        </div>
                    </div>
                )}
                {/* 3 photo */}
                {photos.length == 3 && (
                    <div className='border-[1px] border-tt-border-color overflow-hidden rounded-2xl flex items-center h-[290px]'>
                        <div className='relative w-1/2 h-full overflow-hidden mr-[2px] bg-white'>
                            <img src={`http://localhost:5000/${photos[0].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                        </div>
                        <div className='w-1/2 h-full flex justify-between flex-col'>
                            <div className='h-1/2 w-full relative overflow-hidden bg-white'>
                                <img src={`http://localhost:5000/${photos[1].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                            </div>
                            <div className='h-1/2 w-full relative overflow-hidden mt-[2px] bg-white'>
                                <img src={`http://localhost:5000/${photos[2].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                            </div>
                        </div>
                    </div>
                )}
                {/* 4 photo */}
                {photos.length == 4 && (
                    <div className='border-[1px] border-tt-border-color rounded-2xl overflow-hidden flex items-center h-[290px]'>
                        <div className='w-1/2 h-full flex justify-between flex-col mr-[2px]'>
                            <div className='h-1/2 w-full relative overflow-hidden mb-[2px] bg-white'>
                                <img src={`http://localhost:5000/${photos[0].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                            </div>
                            <div className='h-1/2 w-full relative overflow-hidden bg-white'>
                                <img src={`http://localhost:5000/${photos[2].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-between flex-col'>
                            <div className='h-1/2 w-full relative overflow-hidden mb-[2px] bg-white'>
                                <img src={`http://localhost:5000/${photos[1].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                            </div>
                            <div className='h-1/2 w-full relative overflow-hidden bg-white'>
                                <img src={`http://localhost:5000/${photos[3].filePath}`} alt='image' className='w-full h-full min-h-full object-cover' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(Photo)