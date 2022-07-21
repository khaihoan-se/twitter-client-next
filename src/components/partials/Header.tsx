import Link from 'next/link'
import React from 'react'
import Logo from '../shared/Logo'
import NavMenu from '../shared/NavMenu'

const Header = () => {
   return (
      <div className='bg-tt-bg-color grow items-end z-10'>
         <div className='xl:w-[275px] w-[88px]'>
            <div className='h-full top-0 fixed'>
               <div className='overflow-y-auto justify-between h-full xl:w-[275px] w-[88px] px-[12px] flex flex-col'>
                  {/* Top */}
                  <div className='items-start'>
                     {/* Logo */}
                     <div className='py-1 max-w-full items-stretch'>
                        <h1 className='min-w-[32px] items-stretch cursor-pointer flex'>
                           <Link href='/'>
                              <a className='min-w-[52px] min-h-[52px] cursor-pointer flex items-center justify-center hover:bg-[#1d9bf01a] rounded-full font-bold text-[15px]'>
                                 <Logo className='h-8 w-8 text-tt-main-color' />
                              </a>
                           </Link>
                        </h1>
                     </div>
                     {/* Menu */}
                     <div className='w-full'>
                        <NavMenu />
                     </div>
                     <div>
                        Tw
                     </div>
                  </div>
                  {/* Buttom */}
                  <div>
                     Avatar
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header