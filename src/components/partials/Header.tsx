import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TweetButton from '../icons/TweetButton'
import CardUser from '../shared/CardUser'
import Logo from '../shared/Logo'
import NavMenu from '../shared/NavMenu'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import UserLogout from './UserLogout'

const Header = () => {
   const { user, isLogged } = useSelector((state: any) => state.auth)

   const [ showLogout, setShowLogout ] = useState<boolean>(false)
   
   const handleShowLogout = (event: any) => {
      event.stopPropagation()
      setShowLogout(!showLogout)
   }

   useEffect(() => {
      document.addEventListener('click', () => {
         setShowLogout(false)
      })
   }, [])
   
   return (
      <div className='bg-tt-bg-color grow items-end z-10 relative flex justify-end'>
         <div className='xl:w-[275px] sm:w-[88px] w-[68px]'>
            <div className='h-full top-0 fixed'>
               <div className='no--scrollbar overflow-y-auto justify-between h-full xl:w-[275px] sm:w-[88px] w-[68px] sm:px-[12px] px-[4px] flex flex-col'>
                  {/* Top */}
                  <div className='items-start'>
                     {/* Logo */}
                     <div className='py-1 max-w-full items-stretch'>
                        <h1 className='min-w-[32px] items-stretch cursor-pointer flex'>
                           <Link href='/'>
                              <a className='min-w-[52px] min-h-[52px] cursor-pointer flex items-center justify-center hover:bg-tt-hover-maincl-color rounded-full font-bold text-[15px]'>
                                 <Logo className='h-8 w-8 text-tt-main-color' />
                              </a>
                           </Link>
                        </h1>
                     </div>
                     {/* Menu */}
                     <div className='w-full'>
                        <NavMenu isLogged={isLogged} />
                     </div>
                     {/* Button TweetButton */}
                     {isLogged && (
                        <div className='sm:w-[90%] w-[100%] my-[4px]'>
                           <div className='bg-tt-main-color min-w-[52px] min-h-[52px] cursor-pointer xl:px-[32px] p-0 rounded-full flex items-center justify-center text-[17px] text-white font-bold'>
                              <span className='xl:block hidden'>Tweet</span>
                              <TweetButton className='w-[24px] h-[24px] text-white xl:hidden block' />
                           </div>
                        </div>
                     )}
                  </div>
                  {/* Buttom */}
                  {isLogged && (
                     <div className='my-[12px] flex items-center justify-between sm:p-[12px] p-0 rounded-full hover:bg-tt-hover-header-color cursor-pointer w-full relative'
                        onClick={handleShowLogout}
                     >
                        <div>
                           <CardUser name={user.fullname} email={user.username} url={user.avatar} />
                        </div>
                        <div className='xl:block hidden'>
                           <BiDotsHorizontalRounded className='text-[20px]' />
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
         {showLogout && <UserLogout />}
      </div>
   )
}

export default React.memo(Header)