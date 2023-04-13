import logo from '@/assets/images/mslogo.png';
import Image from 'next/image';
import styles from '@/styles/NavBar.module.css';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.logo} href='/'>
				<Image src={logo} alt='musicians square logo' width={50} height={60} />
				<span>M</span>usicians<span>S</span>quare
			</Link>
			<ul>
				<li>
					<Link href='/'>HOME</Link>
				</li>
				<li>
					<Link href='/about'>ABOUT</Link>
				</li>
				<li>
					<Link href='/privacy'>PRIVACY</Link>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
