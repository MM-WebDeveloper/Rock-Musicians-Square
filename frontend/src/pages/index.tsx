import { ForumPost } from '@/models/forum-post';
import { GetServerSideProps } from 'next';
import * as ForumPostApi from '@/network/api/forum-posts';

interface IndexPageProps {
	posts: ForumPost[];
}

export const getServerSideProps: GetServerSideProps<
	IndexPageProps
> = async () => {
	const posts = await ForumPostApi.getForumPosts();
	return { props: { posts } };
};

export default function Index({ posts }: IndexPageProps) {
	// return <div>{JSON.stringify(posts)}</div>;
	return <div className='index'>index</div>;
}
