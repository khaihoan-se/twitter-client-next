import React from 'react'
import MediaIcon from '../icons/MediaIcon';
import GifIcon from '../icons/GifIcon';
import PollIcon from '../icons/PollIcon';
import EmojiIcon from '../icons/EmojiIcon';
import ScheduleIcon from '../icons/ScheduleIcon';
import LocationIcon from '../icons/LocationIcon';

interface ToolEditerProps {
    onImageChange: any;
}
const ToolEditer = ({ onImageChange }: ToolEditerProps) => {
    return (
        <div className='flex items-center mt-[12px]'>
            {/* MediaIcon */}
            <div className='toolediter--media min-w-[36px] min-h-[36px] rounded-full hover:bg-tt-hover-maincl-color flex items-center justify-center cursor-pointer relative'>
                <MediaIcon className='w-[20px] h-[20px] text-tt-main-color' />
                <span className='hidden px-[4px] py-[2px] bg-slate-500 absolute top-[100%] text-[12px] rounded-sm text-white'>Media</span>
                <input accept='image/jpeg,image/png,image/webp,image/gif,video/*' multiple type='file' className='absolute w-full h-full opacity-0 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer z-40' onChange={onImageChange} />
            </div>
            {/* GifIcon */}
            <div className='toolediter--gif min-w-[36px] min-h-[36px] rounded-full hover:bg-tt-hover-maincl-color flex items-center justify-center cursor-pointer relative'>
                <GifIcon className='w-[20px] h-[20px] text-tt-main-color' />
                <span className='hidden px-[4px] py-[2px] bg-slate-500 absolute top-[100%] text-[12px] rounded-sm text-white'>GIF</span>
            </div>
            {/* PollIcon */}
            <div className='toolediter--poll min-w-[36px] min-h-[36px] rounded-full hover:bg-tt-hover-maincl-color flex items-center justify-center cursor-pointer relative'>
                <PollIcon className='w-[20px] h-[20px] text-tt-main-color' />
                <span className='hidden px-[4px] py-[2px] bg-slate-500 absolute top-[100%] text-[12px] rounded-sm text-white'>Poll</span>
            </div>
            {/* EmojiIcon */}
            <div className='toolediter--emoji min-w-[36px] min-h-[36px] rounded-full hover:bg-tt-hover-maincl-color flex items-center justify-center cursor-pointer relative'>
                <EmojiIcon className='w-[20px] h-[20px] text-tt-main-color' />
                <span className='hidden px-[4px] py-[2px] bg-slate-500 absolute top-[100%] text-[12px] rounded-sm text-white'>Emoji</span>
            </div>
            {/* ScheduleIcon */}
            <div className='toolediter--schedule min-w-[36px] min-h-[36px] rounded-full hover:bg-tt-hover-maincl-color flex items-center justify-center cursor-pointer relative'>
                <ScheduleIcon className='w-[20px] h-[20px] text-tt-main-color' />
                <span className='hidden px-[4px] py-[2px] bg-slate-500 absolute top-[100%] text-[12px] rounded-sm text-white'>Schedule</span>
            </div>
            {/* LocationIcon */}
            <div className='toolediter--location min-w-[36px] min-h-[36px] rounded-full hover:bg-tt-hover-maincl-color flex items-center justify-center cursor-pointer relative'>
                <LocationIcon className='w-[20px] h-[20px] text-tt-main-color' />
                <span className='hidden px-[4px] py-[2px] bg-slate-500 absolute top-[100%] text-[12px] rounded-sm text-white'>Location</span>
            </div>
        </div>
    )
}

export default React.memo(ToolEditer)