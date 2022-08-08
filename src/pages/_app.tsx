import BaseLayout from '@/components/layouts/BaseLayout'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import axios from 'axios'
import { CookiesProvider } from 'react-cookie'

import '../styles/index.css'
import 'es6-shim'

axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Provider store={store}>
            <CookiesProvider>
               <BaseLayout>
                  <Component {...pageProps} />
               </BaseLayout>
            </CookiesProvider>
         </Provider>
      </>
   )
}
export default MyApp