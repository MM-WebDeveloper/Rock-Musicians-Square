import styles from '@/styles/components/Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			MM-WebDeveloper &copy; {new Date().getFullYear()} Rock Musicians Square
		</footer>
	);
};

export default Footer;
