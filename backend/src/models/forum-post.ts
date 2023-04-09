import { InferSchemaType, Schema, model } from 'mongoose';

const forumPostSchema = new Schema(
	{
		slug: { type: String, required: true, unique: true },
		title: { type: String, required: true },
		body: { type: String, required: true },
	},
	{ timestamps: true }
);

type ForumPost = InferSchemaType<typeof forumPostSchema>;

export default model<ForumPost>('ForumPost', forumPostSchema);
