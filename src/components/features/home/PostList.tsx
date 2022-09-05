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
   const [ page, setpage ] = useState(2);

   const fetchComments = async () => {
      const res = await axios.get(`http://localhost:5000/api/get-posts?page=${page}&limit=5`)
      const data = res.data.posts
      return data
   }
   
   const fetchData = async () => {
      console.log('addd');
      
      const commentsFormServer = await fetchComments();
      setPosts([...posts, ...commentsFormServer]);      
      if (commentsFormServer.length === 0 || commentsFormServer.length < 10) {
         sethasMore(false);
      }
      setpage(page + 1);
      console.log(page);
      
   }
   return (
      <InfiniteScroll
         dataLength={posts.length}
         next={fetchData}
         hasMore={hasMore}
         loader={<div>Loading...</div>}
         endMessage={<div>Hết bài ....</div>}
      >
         {posts.map((item: any, index: number) => (
            <CardPost description={item.description} images={item.images} key={index} />
         ))}
      </InfiniteScroll>
   )
}

export default PostList