import HomeHeader from '@/components/features/home/HomeHeader'
import CardPost from '@/components/shared/CardPost'
import ClientOnly from '@/components/shared/ClientOnly'
import Editer from '@/components/shared/Editer'
import Image from '@/components/shared/Image'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import {useSelector} from 'react-redux'

const HomePage: NextPage = () => {
   const {posts} = useSelector((state: any) => state.posts)
   console.log(posts);
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
            {/* CardPost */}
            {posts && posts.map((item: any, index: number) => (
               <CardPost description={item.description} images={item.images} key={index} />
            ))}
         </ClientOnly>
      </React.Fragment>
   )
}

export default HomePage