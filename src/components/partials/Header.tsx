import React from 'react'
import ExploreActiveIcon from '../icons/ExploreActiveIcon'
import ExploreLineIcon from '../icons/ExploreLineIcon'
import HomeActiveIcon from '../icons/HomeActiveIcon'
import HomeLineIcon from '../icons/HomeLineIcon'
import MessageActiveIcon from '../icons/MessageActiveIcon'
import MessageLineIcon from '../icons/MessageLineIcon'
import MoreIcon from '../icons/MoreIcon'
import NotificationActiveIcon from '../icons/NotificationActiveIcon'
import NotificationLineIcon from '../icons/NotificationLineIcon'
import ProfileActiveIcon from '../icons/ProfileActiveIcon'
import ProfileLineIcon from '../icons/ProfileLineIcon'
import Twitter from '../icons/Twitter'

const Header = () => {
   return (
      <div>
         <Twitter className='h-8 text-tt-main-color' />
         <HomeActiveIcon className='h-8 text-tt-text-color' />
         <HomeLineIcon className='h-8 text-tt-text-color' />
         <ExploreActiveIcon className='h-8 text-tt-text-color' />
         <ExploreLineIcon className='h-8 text-tt-text-color' />
         <NotificationActiveIcon className='h-8 text-tt-text-color' />
         <NotificationLineIcon className='h-8 text-tt-text-color' />
         <MessageActiveIcon className='h-8 text-tt-text-color' />
         <MessageLineIcon className='h-8 text-tt-text-color' />
         <ProfileActiveIcon className='h-8 text-tt-text-color' />
         <ProfileLineIcon className='h-8 text-tt-text-color' />
         <MoreIcon className='h-8 text-tt-text-color' />
      </div>
   )
}

export default Header