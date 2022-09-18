import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface PostDetailProps {
    query?: any
}
const PostDetail: NextPage<PostDetailProps> = ({ query }) => {
    const router = useRouter()    
    return (
        <Link href='/' scroll={false}>
            <a>PostDetail</a>
        </Link>
    );
}

PostDetail.getInitialProps = async ({ query }: any) => {
    return { query }
}

export default PostDetail;
