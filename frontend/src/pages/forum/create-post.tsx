import { useState } from 'react';
import * as ForumPostApi from '@/network/api/forum-posts';

export default function CreatePostPage() {
	const [input, setInput] = useState({
		slug: '',
		category: '',
		title: '',
		body: '',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await ForumPostApi.createForumPost(input);
			console.log('post successful');
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div>
				<label htmlFor='slug'>Slug:</label>
				<input
					id='slug'
					type='text'
					value={input.slug}
					onChange={(event) => setInput({ ...input, slug: event.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='title'>Title:</label>
				<input
					id='title'
					type='text'
					value={input.title}
					onChange={(event) =>
						setInput({ ...input, title: event.target.value })
					}
				/>
			</div>
			<div>
				<label htmlFor='body'>Body:</label>
				<textarea
					id='body'
					value={input.body}
					onChange={(event) => setInput({ ...input, body: event.target.value })}
				/>
			</div>
			<button type='submit'>Create Post</button>
		</form>
	);
}
