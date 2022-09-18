import React from 'react'
import { MENU_HEADER_LISTS, MENU_HEADER_LISTS_MOBILE } from '@/constants'
import NavItem from './NavItem'
import MoreIcon from '@/components/icons/MoreIcon'

interface NavMenuProps {
    isLogged: boolean;
    username: string;
}
const NavMenu: React.FC<NavMenuProps> = ({ isLogged, username }) => {
    return isLogged ? (
        <nav>
            {MENU_HEADER_LISTS.map(item => (
                item.page === 'Profile' 
                ? <NavItem title={item.page} path={`/${username}`} Icon={item.icon} key={item.path} IconActive={item.activeIcon} /> 
                : <NavItem title={item.page} path={item.path} Icon={item.icon} key={item.path} IconActive={item.activeIcon} />
            ))}
            <NavItem title='More' Icon={MoreIcon} path='' />
        </nav>
    ) : (
        <nav>
            {MENU_HEADER_LISTS_MOBILE.map(item => (
                <NavItem title={item.page} path={item.path} Icon={item.icon} key={item.path} IconActive={item.activeIcon} />
            ))}
            {/* <NavItem title='More' Icon={MoreIcon} path='' /> */}
        </nav>
    )
}

export default React.memo(NavMenu)