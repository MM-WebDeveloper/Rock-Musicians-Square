import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import '@/styles/style.scss';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>RMS | Welcome</title>
				<meta
					name='description'
					content='A forum for musicians around the world'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}
