import React, { useEffect } from 'react';
import Logo from '@/components/shared/Logo';
import { NextPage } from "next";
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const LogoutPage: NextPage = () => {
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const handleLogout = () => {
        removeCookie('token')
        localStorage.clear()
        router.push('/login')
        router.reload
    }
    
    useEffect(() => {
        // Prefetch the dashboard page
        router.prefetch('/login')
    }, [])
    return (
        <div className='fixed inset-0 bg-tt-bg-logout flex items-center justify-center'>
            <div className='absolute inset-0 z-40' onClick={() => router.back()}></div>

            <div className='w-[320px] max-w-[80vw] min-h-calc-192 h-full self-center items-center justify-center flex z-50'>
                <div className='max-h-full max-w-[600px] overflow-y-auto w-full bg-tt-bg-color my-auto rounded-2xl p-8'>
                    <Logo className='w-full h-[40px] mb-4 text-tt-logo-color' />
                    <h1 className='mb-2 text-left leading-6 text-[20px] text-tt-text-color font-bold break-words min-w-0'>
                        <span className='break-words min-w-0'>Log out of Twitter?</span>
                    </h1>
                    <div className='text-left text-tt-subtext-color w-full font-normal text-[15px] leading-5 break-words min-w-0'>
                        <span>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. </span>
                        <span className='break-words min-w-0'></span>
                    </div>
                    <div className='mt-6 flex-col w-full mr-calc--12px mb-calc--12px'>
                        <div role='button' className='bg-tt-bg-button-logout hover:bg-tt-bg-button-hover-logout min-w-[44px] min-h-[44px] text-ellipsis mb-3 whitespace-nowrap outline-none flex items-center justify-center rounded-full text-tt-bg-color font-bold'
                            onClick={handleLogout}
                        >Log out</div>
                        <div role='button' className='bg-tt-bg-button-cancel-logout hover:bg-tt-bg-button-cancel-hover-logout min-w-[44px] min-h-[44px] text-ellipsis mb-3 whitespace-nowrap outline-none border-[1px] border-tt-border-color-button-cancel-logout flex items-center justify-center rounded-full text-tt-text-button-cancel-logout font-bold'
                            onClick={() => router.back()}
                        >Cancel</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutPage