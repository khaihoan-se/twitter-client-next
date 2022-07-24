import BaseLayout from '@/components/layouts/BaseLayout'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import '../styles/index.css'
import 'es6-shim'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
      <Provider store={store}>
         <BaseLayout>
            <Component {...pageProps} />
         </BaseLayout>
      </Provider>
      </>
   )
}

export default MyApp