import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import CardPost from '@/components/shared/CardPost'
import PostApi from '@/api/PostApi';
import Link from 'next/link';

interface PostListProps {
   data: any
}

const PostList = ({ data }: PostListProps) => {
   const [ posts, setPosts ] = useState(data)
   const [hasMore, sethasMore] = useState(true);
   const [ page, setPage ] = useState(2);
   
   const fetchComments = async () => {
      const res: any = await PostApi.getAllPosts(page, 5)
      const data = res.posts      
      return data
   }
   const fetchData = async () => {
      const commentsFormServer = await fetchComments();
      setPosts([...posts, ...commentsFormServer]);   
      if (commentsFormServer.length === 0 || commentsFormServer.length < 5) {
         sethasMore(false);
      }
      setPage(page + 1)
   }
   
   return (
      <InfiniteScroll
         dataLength={posts.length}
         next={fetchData}
         hasMore={hasMore}
         loader={<div>Loading...</div>}
         endMessage={<div>Hết bài ....</div>}
         style={{
            overflow: 'initial',
         }}
      >
         {posts.map((item: any, index: number) => (
            <div key={item._id}>
               <CardPost postData={item} />
            </div>
         ))}
      </InfiniteScroll>
   )
}

export default PostList