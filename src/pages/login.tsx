import Image from '@/components/shared/Image'
import Input from '@/components/shared/Input'
import Logo from '@/components/shared/Logo'
import { NextPage } from 'next'
import React from 'react'

const LoginPage: NextPage = () => {
    return (
        <React.Fragment>
            <div className='w-full min-h-screen bg-white'>
                <div className='min-h-screen lg:h-screen h-auto w-full flex lg:flex-row flex-col-reverse'>
                    <div className='login--banner flex items-center justify-center relative lg:h-full h-[280px]'>
                        <Logo className='h-1/2 lg:min-h-[380px] min-h-full max-w-full p-[30px] w-full text-white z-50' />
                        <Image src='/img/benner_login_242000.png' layout='fill' objectFit='cover' className='w-full h-full'  />
                    </div>
                    <div className='lg:w-[55vw] w-full h-full min-h-screen p-[15px] bg-white'>
                        <div className='w-full h-full p-[19px]'>
                            <Logo className='h-12 w-12 text-tt-main-color' />
                            <div className='text-tt-text-color leading-[60px] tracking-[-1.2px] text-[61px] font-bold my-[46px]'>
                                <span>Đang diễn ra ngay bây giờ</span>
                            </div>
                            <div className='text-tt-text-color tracking-[-1.2px] text-[31px] font-bold mb-[16px]'>
                                <span>Tham gia Twitter hôm nay.</span>
                            </div>
                            <div>
                                <Input />
                            </div>
                        </div>
                    </div>
                </div>
                <div>Infomation</div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage