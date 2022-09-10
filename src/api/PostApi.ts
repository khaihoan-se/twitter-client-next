import axiosClient from './axiosClient'

const PostApi = {
    createPost: (post: any, mulitpleFileOptions: any) => {
        const url = 'create-post';
        return axiosClient.post(url, post, mulitpleFileOptions);
    },
    getAllPosts: (page: number, limit: number) => {
        const url = `get-posts?page=${page}&limit=${limit}`;
        // const url = 'get-posts';
        return axiosClient.get(url);
    }
}

export default PostApi;