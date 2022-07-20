import Header from '@/components/partials/Header'
import { ReactNode } from 'react'

interface BaseLayoutProps {
    children: ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <main className='app light green'>
            <Header />
            <div className='app-content'>{children}</div>
        </main>
    )
}

export default BaseLayout