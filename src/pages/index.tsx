import HomeHeader from '@/components/features/home/HomeHeader'
import ClientOnly from '@/components/shared/ClientOnly'
import Editer from '@/components/shared/Editer'
import Image from '@/components/shared/Image'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <Head>
            <title>Home / Twitter</title>
         </Head>
         <ClientOnly>
            {/* Home Header */}
            <HomeHeader />
            {/* Input Post */}
            <Editer />
            {/* test */}
            {/* <div className='w-full h-[300px] relative'>
               <Image src='https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/295390844_1214295472716126_7088015190272677312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=feAUuEOYZGMAX_02h86&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-2aaCA-pSPogho6o9S2onrPOdLC5AG3wjh9mgpxhJXVw&oe=62DF42D7' layout='fill' alt='bacned' objectFit='fill' />
            </div> */}
         </ClientOnly>
      </React.Fragment>
   )
}

export default HomePage