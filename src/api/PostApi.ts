import axiosClient from './axiosClient'

const PostApi = {
    getAllPosts: () => {
        const url = 'posts';
        return axiosClient.get(url);
    }
}

export default PostApi;