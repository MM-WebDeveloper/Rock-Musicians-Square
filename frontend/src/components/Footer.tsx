import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} Rock Musicians Square</p>
			<ul>
				<li>
					<Link href='/privacy'>Privacy</Link>
				</li>
				<li>
					<Link href='/imprint'>Imprint</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
