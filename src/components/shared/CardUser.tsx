import React from 'react'
import Avatar from './Avatar'

interface CardUserProps {
    name: string;
    email: string;
    url?: string
}
const CardUser = ({ name, email, url }: CardUserProps) => {
    return (
        <div className='flex items-center'>
            <div>
                <Avatar src={url ? url : '/img/benner_login_242000.png'} />
            </div>
            <div className='mx-[12px] xl:block hidden'>
                <div className='max-w-full shrink text-[15px] font-bold'><span>{name}</span></div>
                <div className='max-w-full shrink text-[15px] font-normal text-tt-subtext-color'><span>@{email}</span></div>
            </div>
        </div>
    )
}

export default React.memo(CardUser)