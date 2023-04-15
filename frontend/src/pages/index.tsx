import { ForumPost } from '@/models/forum-post';
import { GetServerSideProps } from 'next';
import * as ForumPostApi from '@/network/api/forum-posts';
import styles from '@/styles/index.module.css';

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
	return <div className={styles.index}>{JSON.stringify(posts)}</div>;
}
