export const addPost = (data: any) => {
    return {
        type: 'createPost/addDescription',
        payload: data
    };
}
export const addImage = (data: any) => {
    return {
        type: 'createPost/addImages',
        payload: data
    };
}
