import React from 'react'
import { MENU_HEADER_LISTS } from '@/constants'
import NavItem from './NavItem'
import MoreIcon from '@/components/icons/MoreIcon'

const NavMenu = () => {
    return (
        <nav>
            {MENU_HEADER_LISTS.map(item => (
                <NavItem title={item.page} path={item.path} Icon={item.icon} key={item.path} IconActive={item.activeIcon} />
            ))}
            <NavItem title='More' Icon={MoreIcon} path='' />
        </nav>
    )
}

export default NavMenu