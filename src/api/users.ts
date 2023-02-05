import { client } from '../utils/axiosClient';
import { User } from '../type/User';

export const getAllUsers = () => client.get<User[]>('/users');
export const getUserById = (userId: number) => client.get<User[]>(`/users/${userId}`);
