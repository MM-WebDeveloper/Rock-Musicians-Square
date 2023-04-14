import styles from '@/styles/Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				MM-WebDeveloper &copy; {new Date().getFullYear()} Rock Musicians Square
			</p>
		</footer>
	);
};

export default Footer;
