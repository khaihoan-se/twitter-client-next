import classNames from 'classnames';
import React from 'react'
import Avatar from './Avatar'

interface CardUserProps {
    name: string;
    email: string;
    url?: string;
    isHidden?: boolean;
    classAvatar?: string
}
const CardUser = ({ name, email, url, isHidden, classAvatar }: CardUserProps) => {
    return (
        <div className='flex items-center'>
            <div>
                <Avatar src={url ? url : '/img/benner_login_242000.png'} className={classAvatar} />
            </div>
            <div className={classNames(
                'mx-[12px] max-w-[129px] overflow-hidden',
                isHidden ? 'xl:block hidden' : ''
            )}>
                <div className='max-w-full shrink text-[15px] font-bold whitespace-nowrap'><span>{name}</span></div>
                <div className='max-w-full shrink text-[15px] font-normal text-tt-subtext-color'><span>@{email}</span></div>
            </div>
        </div>
    )
}

export default React.memo(CardUser)