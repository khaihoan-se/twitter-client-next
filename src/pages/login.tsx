import LoginApi from '@/api/LoginApi'
import Image from '@/components/shared/Image'
import Input from '@/components/shared/Input'
import Logo from '@/components/shared/Logo'
import { NextPage } from 'next'
import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchLogin } from '@/redux/actions/authAction'
import useLocalStorage from '@/hooks/useLocalStorage'

const initialState = { email: '', password: '', error: '', success: ''}

const LoginPage: NextPage = () => {
    const { isLogged } = useSelector((state: any) => state.auth)
    const router = useRouter()
    if(isLogged) {
        router.push('/')
        return <div className='w-full h-full fixed inset-0 bg-tt-bg-color z-50'></div>
    }
    // isLogged && router.push('/')

    const [firstLogin, setFirstLogin] = useLocalStorage<boolean>('firstLogin', false);

    const dispatch = useDispatch()

    const [ user, setUser ] = useState(initialState)
    const { email, password } = user
    // handle change input get info email, password login
    const handleChangeUser = (event: any) => {
        const { name, value } = event.target;
        setUser({...user, [name]:value, error: '', success: '' })
    }
    // handle submit login
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        try {
            const res: any = await LoginApi.login(user)
            setUser({...user, error: '', success: res.message });
            dispatch(dispatchLogin())
            setFirstLogin(true)
            router.push('/')
        } catch (err: any) {
            err.response.data.message && 
            setUser({...user, error: err.response.data.message, success: '' })
        }
    }    
    return (
        <React.Fragment>
            <div className='w-full min-h-screen bg-white'>
                <div className='min-h-screen lg:h-screen h-auto w-full flex lg:flex-row flex-col-reverse'>
                    <div className='login--banner flex items-center justify-center relative lg:h-full h-[280px]'>
                        <Logo className='h-1/2 lg:min-h-[380px] min-h-full max-w-full p-[30px] w-full text-white z-50' />
                        <Image src='/img/benner_login_242000.png' layout='fill' objectFit='cover' className='w-full h-full'  />
                    </div>
                    <div className='lg:w-[55vw] w-full h-full min-h-screen p-[15px] bg-white flex justify-center flex-col items-center'>
                        <div className='w-full h-full p-[19px] md:max-w-full max-w-[600px] min-w-[45vw]'>
                            <Logo className='h-12 w-12 text-tt-main-color' />
                            <div className='text-tt-text-color leading-[60px] md:text-[61px] text-[41px] font-bold md:my-[46px] my-[26px]'>
                                <span>Đang diễn ra ngay bây giờ</span>
                            </div>
                            <div className='text-tt-text-color tracking-[1px] md:text-[31px] text-[21px] font-bold mb-[32px]'>
                                <span>Tham gia Twitter hôm nay.</span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='max-w-[380px] w-[300px] h-[45px] bg-white mb-3 rounded-[50px] px-4 flex items-center border-[1px] border-[#cfd9de]'>
                                    <Input label='Email' type="text" name="email" value={email} onChange={handleChangeUser} />
                                </div>
                                <div className='max-w-[380px] w-[300px] h-[45px] bg-white mb-3 rounded-[50px] px-4 flex items-center border-[1px] border-[#cfd9de]'>
                                    <Input label='Password' type="password" name="password" value={password} onChange={handleChangeUser} />
                                </div>
                                <button type='submit' className='max-w-[380px] w-[300px] h-[45px] bg-tt-main-color mb-3 rounded-[50px] px-3 flex items-center justify-center text-[18px] font-bold text-white'>
                                    <span>Đăng nhập</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div>Infomation</div> */}
            </div>
        </React.Fragment>
    )
}

export default LoginPage