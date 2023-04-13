import logo from '@/assets/images/rmslogo.png';
import Image from 'next/image';
import styles from '@/styles/NavBar.module.css';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.logo} href='/'>
				<Image
					src={logo}
					alt='rock musicians square logo'
					width={30}
					height={40}
				/>
				<span>R</span>ock<span>M</span>usicians<span>S</span>quare
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
