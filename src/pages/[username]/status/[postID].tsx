import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface PostDetailProps {
    query?: any
}
const PostDetail: NextPage<PostDetailProps> = ({ query }) => {
    const router = useRouter()
    console.log(query);
    
    return (
        <div>
            PostDetail
        </div>
    );
}

PostDetail.getInitialProps = async ({ query }: any) => {
    return { query }
}

export default PostDetail;
