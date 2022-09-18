import React, { useEffect, useState, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import CardPost from '@/components/shared/CardPost'
import PostApi from '@/api/PostApi';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction } from '@/redux/actions/postAction';

interface PostListProps {
   data: any
}

const PostList = ({ data }: PostListProps) => {
   const [ posts, setPosts ] = useState(data)
   const [hasMore, sethasMore] = useState(true);
   const [ page, setPage ] = useState(2);

   const disptch = useDispatch()
   const listPost = useSelector((state: any) => state.listPost)

   useEffect(() => {
      disptch(getPostAction(posts))
   }, [posts])

   const fetchComments = async () => {
      const res: any = await PostApi.getAllPosts(page, 5)
      const data = res.posts      
      return data
   }

   const fetchData = async () => {
      const commentsFormServer = await fetchComments();
      setPosts([...posts, ...commentsFormServer]);
      disptch(getPostAction(posts))
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
         endMessage={<div className='min-h-[40px] bg-tt-main-color text-white rounded-md flex items-center justify-center'>End of post</div>}
         style={{
            overflow: 'initial',
         }}
      >
         {listPost.posts.map((item: any) => (
            <div key={item._id}>
               <CardPost postData={item} />
            </div>
         ))}
      </InfiniteScroll>
   )
}

export default PostList