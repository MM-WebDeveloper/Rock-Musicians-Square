import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app';
import env from './env';

const PORT = env.PORT;
mongoose
	.connect(env.MONGO_CONNECTION_STRING)
	.then(() => {
		console.log('Database connection was successful');
		app.listen(PORT, () => {
			console.log('Server running on port: ' + PORT);
		});
	})
	.catch(console.error);
