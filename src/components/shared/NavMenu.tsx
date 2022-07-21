import React from 'react'
import { MENU_HEADER_LISTS } from '@/constants'
import NavItem from './NavItem'

const NavMenu = () => {
    return (
        <nav>
            {MENU_HEADER_LISTS.map(item => (
                <NavItem title={item.page} path={item.path} Icon={item.icon} key={item.path} IconActive={item.activeIcon} />
            ))}
        </nav>
    )
}

export default NavMenu