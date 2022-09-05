import React from 'react'
import HastagCard from '../icons/HastagCard'
import Avatar from './Avatar'
import { CgClose } from 'react-icons/cg' 
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { changeText } from '@/utils';
import ReactHtmlParser from 'react-html-parser'
import ValuePhoto from './ValuePhoto'
import CardPostPhoto from './CardPostPhoto'

interface CardPostProps {
    description: any;
    images: any
}
const CardPost: React.FC<CardPostProps> = ({description, images}) => {
    return (
        <React.Fragment>
            <div className='bg-tt-bg-color py-[4px] max-h-[100vh] h-auto border-b-[1px] border-tt-border-color cursor-pointer hover:bg-tt-hover-main-color'>
                <div className='px-[14px] w-full h-full'>
                    <div>
                        <div className='flex items-center justify-between basis-0 mb-[4px] text-tt-subtext-color'>
                            <div className='basis-[46px] mr-[11px] grow-[0] flex items-center justify-end'>
                                <HastagCard className='w-[15px] h-[15px]' />
                            </div>
                            <div className='flex-1 text-[12px] flex items-center font-bold'>
                                <span className='mr-2 hover:underline'>Genshin Impact</span>
                                <span className='w-[2px] h-[2px] rounded-full block bg-tt-subtext-color mr-2'></span>
                                <span className='text-tt-main-color hover:underline'>See more</span>
                            </div>
                            <div className='h-[30px] w-[30px] rounded-full hover:bg-tt-hover-maincl-color hover:text-tt-main-color flex items-center justify-center'>
                                <CgClose className='text-[18px]' />
                            </div>
                        </div>
                    </div>
                    <div className='flex-row flex'>
                        <div className='pt-[4px] basis-[43px] mr-[11px] grow-0'>
                            <Avatar src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/273458155_1108489356630072_1055490645894228383_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-RPOTiB7Au4AX-9qkVK&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT_KWNp8iUOiaa9OJPZj_NfYje2B1Fu52PgUwnRqy4IVPA&oe=62E1221A' className='w-[43px] h-[43px] hover:opacity-60' />
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex items-center'>
                                    <span className='font-bold mr-1 hover:underline'>Genshin Impact</span>
                                    <span className='text-tt-subtext-color mr-2'>@GenshinImpact.vi</span>
                                    <span className='w-[2px] h-[2px] rounded-full block bg-tt-subtext-color mr-2'></span>
                                    <span className='text-tt-subtext-color'>8h</span>
                                </div>
                                <div className='h-[30px] w-[30px] rounded-full text-tt-subtext-color hover:bg-tt-hover-maincl-color hover:text-tt-main-color flex items-center justify-center'>
                                    <BiDotsHorizontalRounded className='text-[18px]' />
                                </div>
                            </div>
                            {/* Description */}
                            <div>
                                {description.length < 2 && description[0].text === '' ? '' : (
                                    <div className='text-[15px]'>
                                        {description && description.map((item: any) => (
                                            <div key={item.key}>
                                                {ReactHtmlParser(changeText(item.text))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {images && (
                                    <div className='mt-[12px]'>
                                        {/* <ValuePhoto photos={images} /> */}
                                        <CardPostPhoto images={images} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(CardPost)