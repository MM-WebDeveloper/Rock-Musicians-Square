import { RequestHandler } from 'express';
import ForumPostModel from '../models/forum-post';

export const getForumPosts: RequestHandler = async (req, res) => {
	try {
		const allForumPosts = await ForumPostModel.find().exec();
		res.status(200).json(allForumPosts);
	} catch (error) {
		res.status(500).json({ error });
	}
};

interface ForumPostBody {
	slug: string;
	title: string;
	body: string;
}

export const createForumPost: RequestHandler<
	unknown,
	unknown,
	ForumPostBody,
	unknown
> = async (req, res) => {
	const { slug, title, body } = req.body;

	try {
		const newForumPost = await ForumPostModel.create({
			slug,
			title,
			body,
		});

		res.status(201).json(newForumPost);
	} catch (error) {
		res.status(500).json({ error });
	}
};
