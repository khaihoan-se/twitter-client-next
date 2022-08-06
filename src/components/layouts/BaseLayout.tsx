import Header from '@/components/partials/Header'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import LoginApi from '@/api/LoginApi';
import { dispatchUser, dispatchLogin, dispatchToken } from '@/redux/actions/authAction'
import { AuthState } from '@/types'
import { Helmet } from 'react-helmet';

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const auth = useSelector((state: any) => state.auth)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin') || '';
        firstLogin && (async () => {
            try {
                const { data } = await LoginApi.getTokenSuccess()
                dispatch(dispatchUser(data.user))
                dispatch(dispatchLogin());
                dispatch(dispatchToken(data.access_token))
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [auth.isLogged])
    
    if(loading) return <div className='w-full h-full fixed inset-0 bg-tt-bg-color z-50'></div>
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <body className='app light blue' />
            </Helmet>
            <main>
                {/* {loading && <div className='w-full h-full fixed inset-0 bg-tt-bg-color z-50'></div>} */}
                <div className={classNames(
                    'flex min-h-screen mx-auto',
                    router.pathname !== '/login' ? 'container' : ''
                )}>
                    {router.pathname === '/login' ? (<>{children}</>) :
                    (<>
                        <Header />
                        <div className='app-content items-start shrink grow flex basis-auto flex-col'>
                            <div className='w-[990px] shrink grow flex basis-auto flex-col'>
                                <div className='flex grow'>
                                    <div className='max-w-[600px] min-h-[2000px] bg-tt-bg-color  mr-0 ml-0 z-[1] w-full border-l-[1px] border-r-[1px] border-tt-border-color'>
                                        {children}
                                    </div>
                                    <div className='w-[350px] mr-[10px] bg-tt-bg-color lg:block hidden'>
                                        Right
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>
            </main>
        </>
    )
}

export default BaseLayout