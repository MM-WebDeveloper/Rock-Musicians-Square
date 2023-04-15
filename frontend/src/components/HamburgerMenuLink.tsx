import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import styles from '@/styles/HamburgerMenuLink.module.css';

interface HamburgerMenuLinkProps {
	endpoint: string;
}

const HamburgerMenuLink = ({ endpoint }: HamburgerMenuLinkProps) => {
	const generateTitleFromEndpoint = (str: String) => {
		let title = str.split('-');
		title = title.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
		return title.join(' ');
	};

	return (
		<li className={styles.hamburger_menu_link}>
			<Link href={endpoint}>
				{generateTitleFromEndpoint(endpoint)}
				<AiOutlineRight />
			</Link>
		</li>
	);
};
export default HamburgerMenuLink;
