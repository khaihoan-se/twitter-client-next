import HomeHeader from '@/components/features/home/HomeHeader'
import CardPost from '@/components/shared/CardPost'
import ClientOnly from '@/components/shared/ClientOnly'
import Editer from '@/components/shared/Editer'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import {useSelector} from 'react-redux'
import PostApi from '@/api/PostApi'
import PostList from '@/components/features/home/PostList'

interface HomePage {
   listPosts: any
}

const HomePage: NextPage<HomePage> = ({ 
   listPosts 
}) => {
   const {posts} = useSelector((state: any) => state.posts)
   // console.log(listPosts);
   
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
            {/* {listPosts && listPosts.posts.map((item: any, index: number) => (
               <CardPost description={item.description} images={item.images} key={index} />
            ))} */}
            <PostList data={listPosts.posts} />
         </ClientOnly>
      </React.Fragment>
   )
}
export const getStaticProps: GetStaticProps = async () => {
   const data = await PostApi.getAllPosts()
   return {
      props: {
         listPosts: data
      }
   }
}
export default HomePage