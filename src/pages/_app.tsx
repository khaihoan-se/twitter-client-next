import BaseLayout from '@/components/layouts/BaseLayout'
import { AppProps } from 'next/app'

import '../styles/index.css'
import 'es6-shim'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <BaseLayout>
            <Component {...pageProps} />
         </BaseLayout>
      </>
   )
}

export default MyApp