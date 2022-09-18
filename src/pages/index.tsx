import HomeHeader from '@/components/features/home/HomeHeader'
import ClientOnly from '@/components/shared/ClientOnly'
import Editer from '@/components/shared/Editer'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'
import PostApi from '@/api/PostApi'
import PostList from '@/components/features/home/PostList'

interface HomePage {
   listPosts: any
}

const HomePage: NextPage<HomePage> = ({ listPosts }) => {
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
            <PostList data={listPosts.posts} />
         </ClientOnly>
      </React.Fragment>
   )
}
export const getStaticProps: GetStaticProps = async () => {
   const data = await PostApi.getAllPosts(1, 5)
   return {
      props: {
         listPosts: data
      }
   }
}
export default HomePage