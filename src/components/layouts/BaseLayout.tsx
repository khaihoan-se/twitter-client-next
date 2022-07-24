import Header from '@/components/partials/Header'
import { ReactNode } from 'react'

interface BaseLayoutProps {
    children: ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <main className='app light blue'>
            <div className='flex min-h-screen container mx-auto'>
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
            </div>
        </main>
    )
}

export default BaseLayout