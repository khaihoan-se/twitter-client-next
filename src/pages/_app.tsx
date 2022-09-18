import BaseLayout from '@/components/layouts/BaseLayout'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import axios from 'axios'
import { CookiesProvider } from 'react-cookie'
import React, { useRef, useEffect, memo } from 'react'
import { useRouter } from 'next/router'
import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'

import '../styles/index.css'
import 'es6-shim'

axios.defaults.withCredentials = true;
TimeAgo.addDefaultLocale(en)

const ROUTES_TO_RETAIN = ['/', '/explore', '/[username]/status/[postID]']
const App = ({ Component, pageProps }: AppProps) => {
   const router = useRouter()
   const retainedComponents: any = useRef({})

   const isRetainableRoute: any = ROUTES_TO_RETAIN.includes(router.asPath)

   // Add Component to retainedComponents if we haven't got it already
   if (isRetainableRoute && !retainedComponents.current[router.asPath]) {
      const MemoComponent = memo(Component)
      retainedComponents.current[router.asPath] = {
         component: <MemoComponent {...pageProps} />,
         scrollPos: 0
      }
   }

   // Save the scroll position of current page before leaving
   const handleRouteChangeStart = (url: any) => {
      if (isRetainableRoute) {
         retainedComponents.current[router.asPath].scrollPos = window.scrollY
      }
   }
   // Save scroll position - requires an up-to-date router.asPath
   useEffect(() => {
      router.events.on('routeChangeStart', handleRouteChangeStart)
      return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      }
   }, [router.asPath])

   // Scroll to the saved position when we load a retained component
   useEffect(() => {
      if (isRetainableRoute) {
      window.scrollTo(0, retainedComponents.current[router.asPath].scrollPos)
      }
   }, [Component, pageProps])

   return (
      <>
         <Provider store={store}>
            <CookiesProvider>
               <BaseLayout>
                  <div>
                     <div style={{ display: isRetainableRoute ? 'block' : 'none' }}>
                     {Object.entries(retainedComponents.current).map(([path, c]: any) => (
                        <div
                           key={path}
                           style={{ display: router.asPath === path ? 'block' : 'none' }}
                        >
                           {c.component}
                        </div>
                     ))}
                     </div>
                     {!isRetainableRoute && (<Component {...pageProps} />)}
                  </div>
                  {/* <Component {...pageProps} /> */}
               </BaseLayout>
            </CookiesProvider>
         </Provider>
      </>
   )
}
export default App