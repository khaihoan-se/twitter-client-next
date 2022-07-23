import TopTweetIcon from '@/components/icons/TopTweetIcon';
import React from 'react';

const HomeHeader = () => {
    return (
        <React.Fragment>
            <div className='sticky top-0 z-50'>
                <div className='w-full h-[53px] flex items-center justify-between px-[16px] mx-auto backdrop-blur-md bg-tt-bg-atc-color'>
                    <div className='shrink h-full grow flex items-center'>
                        <h2 className='font-bold text-[20px] text-tt-text-color'>Home</h2>
                    </div>

                    <div className='min-w-[36px] min-h-[36px] bg-transparent hover:bg-tt-hover-header-color rounded-full flex items-center justify-center cursor-pointer'>
                        <TopTweetIcon className='w-[20px] h-[20px] text-tt-text-color' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(HomeHeader)
