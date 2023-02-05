import { client } from '../utils/axiosClient';
import { Post } from '../type/Post';

export const getAllPosts = () => client.get<Post[]>('/posts/');
export const getPostById = (postId: number) => client.get<Post[]>(`/posts/${postId}`);
