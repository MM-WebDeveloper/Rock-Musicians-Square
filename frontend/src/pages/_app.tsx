import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Musicians Square | Welcome</title>
				<meta
					name='description'
					content='A forum for musicians around the world'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={inter.className}>
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}