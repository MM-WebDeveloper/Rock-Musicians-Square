import { ForumPost } from '@/models/forum-post';
import api from '@/network/axiosInstance';

interface CreateForumPost {
	slug: string;
	category: string;
	title: string;
	body: string;
}

export async function createForumPost(input: CreateForumPost) {
	const response = await api.post<ForumPost>('/posts', input);
	return response.data;
}
