import React, { useEffect, useState } from 'react'
import HastagCard from '../icons/HastagCard'
import Avatar from './Avatar'
import { CgClose } from 'react-icons/cg' 
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { changeText, getDateTimePost } from '@/utils';
import ReactHtmlParser from 'react-html-parser'
import CardPostPhoto from './CardPostPhoto'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ToolCardPost from './ToolCardPost'
import classNames from 'classnames'
import TimeAgo from 'javascript-time-ago'
import TextShow from './TextShow'
import CardInfo from './CardInfo'

interface CardPostProps {
    postData: any;
}
const CardPost: React.FC<CardPostProps> = ({ postData }) => {
    const timeAgo = new TimeAgo('en-US')

    const router = useRouter()

    const [ openTools, setOpenTools ] = useState<boolean>(false)
    const [ isTextShow, setIsTextShow ] = useState<boolean>(false)

    const handleOpenTools = (event: any) => {
        event.stopPropagation()
        setOpenTools(!openTools)
    }

    const handleMouseOver = () => {
        setTimeout(() => {
            setIsTextShow(true)
        }, 500)
    }
    
    const handleMouseOut = () => {
        setIsTextShow(false)
    }
    const LinkDetail = (event: any) => {
        event.stopPropagation()
        router.push(`/${postData.user.username}/status/${postData._id}`)
    }
    // pile of modules
    useEffect(() => {
        window.addEventListener('click', () => {
            setOpenTools(false)
        })
    }, [])
        
    return (
        <React.Fragment>
            {/* <Link href={`/${postData.user.username}/status/${postData._id}`}> */}
            <div className={classNames(
                'bg-tt-bg-color py-[4px] h-auto border-b-[1px] border-tt-border-color',
                !openTools && 'cursor-pointer hover:bg-tt-hover-main-color'
            )}>
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
                            {/* <div className='h-[30px] w-[30px] rounded-full hover:bg-tt-hover-maincl-color hover:text-tt-main-color flex items-center justify-center'>
                                <CgClose className='text-[18px]' />
                            </div> */}
                        </div>
                    </div>
                    <div className='flex-row flex'>
                            <div className='pt-[4px] basis-[48px] mr-[11px] grow-0 relative'>
                                <Avatar src={postData.user.avatar} className='w-[48px] h-[48px] hover:opacity-60' />
                                {/* <>
                                    <div className='fixed inset-0 w-full h-full bg-transparent z-50'></div>
                                    <CardInfo />
                                </> */}
                            </div>
                        <div className='w-full'>
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex items-center'>
                                    <span className='font-bold mr-1 hover:underline'>{postData.user.fullname}</span>
                                    <span className='text-tt-subtext-color mr-2'>@{postData.user.username}</span>
                                    <span className='w-[2px] h-[2px] rounded-full block bg-tt-subtext-color mr-2'></span>
                                    <span className='text-tt-subtext-color relative whitespace-nowrap cardpost--time hover:underline' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                        {timeAgo.format(Date.now() - getDateTimePost(postData.createdAt), 'twitter')}
                                        {/* <span className='hidden px-[4px] py-[2px] bg-slate-500 opacity-90 absolute top-[100%] left-1/2 translate-x-[-50%] text-[12px] rounded-sm text-white whitespace-nowrap z-40'>{postData.createdAt}</span> */}
                                        {isTextShow && <TextShow text={postData.createdAt} />}
                                    </span>
                                </div>
                                <div className={classNames(
                                    'h-[35px] w-[35px] rounded-full text-tt-subtext-color flex items-center justify-center relative',
                                    !openTools && 'hover:text-tt-main-color hover:bg-tt-hover-maincl-color'
                                )}
                                    onClick={handleOpenTools}
                                >
                                    <BiDotsHorizontalRounded className='text-[18px]' />
                                    {openTools && (
                                        <>
                                            <div className='fixed inset-0 w-full h-full bg-transparent z-50'></div>
                                            <ToolCardPost />
                                        </>
                                    )}
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
                                    <div className={classNames(
                                        postData.description.length < 2 && postData.description[0].text === '' ? '' : 'mt-[12px]'
                                    )}>
                                        <CardPostPhoto images={postData.images} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </React.Fragment>
    )
}

export default React.memo(CardPost)