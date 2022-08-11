import React from 'react'

interface NotifyModuleProps {
    success: string;
    error: string;
    onClick?: (value: any) => void;
    setShowNotify: (value: boolean) => void;
}
const NotifyModule = ({ success, error, onClick}: NotifyModuleProps) => {
    return (
        <React.Fragment>
            <div className='bg--opacity w-full h-full fixed inset-0 flex items-center justify-center z-50'>
                <div className='min-w-[400px] min-h-[160px] bg-tt-bg-color shadow-tt-shadow rounded-lg px-[30px] py-[20px]'>
                    <div className='w-full p-[15px] h-[120px] flex items-center justify-center'>
                        <span>
                            {success === '' ? error : success}
                        </span>
                    </div>
                    <div className='w-full h-[40px] flex items-center justify-center'>
                        <button className='w-[300px] h-[45px] bg-tt-main-color mb-3 rounded-[50px] px-3 flex items-center justify-center text-[18px] font-bold text-white'
                            onClick={onClick}
                        >Đăng nhập</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(NotifyModule)