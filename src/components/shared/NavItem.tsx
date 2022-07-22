import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

interface NavItemProps {
    title?: string;
    Icon?: any;
    path: string;
    IconActive?: any
}
const NavItem = ({ title, Icon, path, IconActive }: NavItemProps) => {
    const router = useRouter()
    const isActive = (href: string) => {
        if(router.pathname === href) return true
    }
    return (
        <Link href={path}>
            <a className='flex items-center grow w-full'>
                <div className='flex items-center p-[12px] hover:bg-tt-hover-header-color rounded-full'>
                    <div>
                        {isActive(path) ? <IconActive className='w-[1.75rem] h-[1.75rem]' /> : <Icon className='w-[1.75rem] h-[1.75rem]' />}
                    </div>
                    <div className={classNames(
                        'mr-[16px] ml-[20px] text-[20px] text-tt-text-color xl:block hidden',
                        isActive(path) && 'font-bold'
                    )}>
                        <span>{title}</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default React.memo(NavItem)