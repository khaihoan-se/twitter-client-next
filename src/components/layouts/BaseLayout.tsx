import Header from '@/components/partials/Header'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import LoginApi from '@/api/LoginApi';
import { dispatchUser, dispatchLogin } from '@/redux/actions/authAction'
import { useCookies } from 'react-cookie';

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const router = useRouter()
    // usePreserveScroll()
    const dispatch = useDispatch()

    const auth = useSelector((state: any) => state.auth)

    // store cookies with 
    const [cookies, setCookie] = useCookies(['token']);
    // call access_token react-cookie
    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        firstLogin && (async () => {
            try {
                const { data } = await LoginApi.getTokenSuccess()
                dispatch(dispatchUser(data.user))
                dispatch(dispatchLogin());
                // dispatch(dispatchToken(data.access_token))
                setCookie('token', data.access_token)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [auth.isLogged])
    
    return (
        <>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <body className='app light blue' />
            </Helmet> */}
            <main className='app dark blue' id='scrolling-element'>
                <div className={classNames(
                    'flex min-h-screen mx-auto',
                    router.pathname !== '/login' ? 'container' : ''
                )}>
                    {router.pathname === '/login' || router.pathname === '/logout' ? (<>{children}</>) :
                    (<>
                        <Header />
                        <div className='app-content items-start shrink grow flex basis-auto flex-col'>
                            <div className='lg:w-[990px] w-full shrink grow flex basis-auto flex-col'>
                                <div className='flex grow'>
                                    <div className='lg:max-w-[600px] w-full min-h-[100vh] bg-tt-bg-color mr-0 ml-0 z-[1] border-l-[1px] border-r-[1px] border-tt-border-color'>
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