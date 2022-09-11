import React from 'react'
import HastagCard from '../icons/HastagCard'
import Avatar from './Avatar'
import { CgClose } from 'react-icons/cg' 
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { changeText } from '@/utils';
import ReactHtmlParser from 'react-html-parser'
import CardPostPhoto from './CardPostPhoto'
import Link from 'next/link'

interface CardPostProps {
    postData: any;
}
const CardPost: React.FC<CardPostProps> = ({ postData }) => {    
    return (
        <React.Fragment>
            <Link href={`/${postData.user.username}/status/${postData._id}`}>
                <div className='bg-tt-bg-color py-[4px] h-auto border-b-[1px] border-tt-border-color cursor-pointer hover:bg-tt-hover-main-color'>
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
                                <Avatar src={postData.user.avatar} className='w-[43px] h-[43px] hover:opacity-60' />
                            </div>
                            <div className='w-full'>
                                <div className='flex w-full items-center justify-between'>
                                    <div className='flex items-center'>
                                        <span className='font-bold mr-1 hover:underline'>{postData.user.fullname}</span>
                                        <span className='text-tt-subtext-color mr-2'>@{postData.user.username}</span>
                                        <span className='w-[2px] h-[2px] rounded-full block bg-tt-subtext-color mr-2'></span>
                                        <span className='text-tt-subtext-color'>8h</span>
                                    </div>
                                    <div className='h-[30px] w-[30px] rounded-full text-tt-subtext-color hover:bg-tt-hover-maincl-color hover:text-tt-main-color flex items-center justify-center'>
                                        <BiDotsHorizontalRounded className='text-[18px]' />
                                    </div>
                                </div>
                                {/* Description */}
                                <div>
                                    {postData.description.length < 2 && postData.description[0].text === '' ? '' : (
                                        <div className='text-[15px] text-tt-text-color'>
                                            {postData.description && postData.description.map((item: any) => (
                                                <div key={item.key}>
                                                    {ReactHtmlParser(changeText(item.text))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {postData.images && (
                                        <div className='mt-[12px]'>
                                            <CardPostPhoto images={postData.images} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default React.memo(CardPost)