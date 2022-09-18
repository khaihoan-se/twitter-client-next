import React from 'react'
import ArrowUserLogout from '../icons/ArrowUserLogout'
import CardUser from '@/components/shared/CardUser'
import CheckUserLogout from '../icons/CheckUserLogout'
import Link from 'next/link'

interface UserLogoutProps {
   user?: any
}
const UserLogout = ({ user }: UserLogoutProps) => {
   return (
      <div className='absolute bottom-[85px] xl:right-[-25px] right-[-240px] w-[300px] max-w-[360px] max-h-[480px] h-[200px] rounded-2xl bg-tt-bg-color z-50 shadow-tt-shadow'>
         <div className='w-full h-full relative py-3'>
            <ArrowUserLogout className='drop-shadow-tt-dropShadow w-[20px] rotate-180 text-tt-bg-color absolute bottom-[-14px] xl:left-[150px] left-4' />
            <div className='flex items-center justify-between py-3 px-4 border-b-[1px] border-tt-border-color'>
               <div>
                  <CardUser name={user.fullname} email={user.username} url={user.avatar} isHidden={false} classAvatar='w-12 h-12' />
               </div>
               <div>
                  <CheckUserLogout className='text-tt-main-color w-full h-[1.25em]' />
               </div>
            </div>
            <div className='w-full p-4 text-tt-text-color text-[15px] font-normal hover:bg-tt-hover-header-color cursor-pointer'>
               <span>Add an existing account</span>
            </div>
            <Link href='/logout'>
               <a className='w-full h-full'>
                  <div className='w-full p-4 text-tt-text-color text-[15px] font-normal hover:bg-tt-hover-header-color cursor-pointer'>
                           <span>{`Log out @${user.username}`}</span>
                  </div>
               </a>
            </Link>
         </div>
      </div>
   )
}

export default React.memo(UserLogout)