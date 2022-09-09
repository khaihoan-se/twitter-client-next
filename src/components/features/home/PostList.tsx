import axios from 'axios';
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import CardPost from '@/components/shared/CardPost'

interface PostListProps {
   data: any
}

const PostList = ({ data }: PostListProps) => {
   const [ posts, setPosts ] = useState(data)
   const [hasMore, sethasMore] = useState(true);
   const [ page, setPage ] = useState(2);
   
   // const fetchComments = async () => {
   //    const res = await axios.get(`http://localhost:5000/api/get-posts?page=${page}&limit=5`)
   //    const data = res.data.posts
   //    return data
   // }
   // const fetchData = async () => {
   //    // const commentsFormServer = await fetchComments();
   //    const res = await axios.get(`http://localhost:5000/api/get-posts?page=${page}&limit=5`)
   //    const commentsFormServer = res.data.posts
   //    setPosts((post: any) => [...post, ...commentsFormServer]);   
   //    // if (commentsFormServer.length === 0 || commentsFormServer.length < 5) {
   //    //    sethasMore(false);
   //    // }
   //    setPage(page + 1)
   // }
   
   return (
      <InfiniteScroll
         dataLength={posts.length}
         next={fetchData}
         hasMore={hasMore}
         inverse={true}
         loader={<div>Loading...</div>}
         endMessage={<div>Hết bài ....</div>}
         style={{
            overflow: 'initial',
         }}
      >
         {posts.map((item: any, index: number) => (
            <CardPost description={item.description} images={item.images} key={index} />
         ))}
      </InfiniteScroll>
   )
}

export default PostList