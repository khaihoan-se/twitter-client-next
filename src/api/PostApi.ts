import axiosClient from './axiosClient'

const PostApi = {
    createPost: (post: any, mulitpleFileOptions: any) => {
        const url = 'create-post';
        return axiosClient.post(url, post, mulitpleFileOptions);
    },
    getAllPosts: () => {
        const url = 'get-posts?page=1&limit=5';
        // const url = 'get-posts';
        return axiosClient.get(url);
    }
}

export default PostApi;