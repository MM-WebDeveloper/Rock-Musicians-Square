import logo from '@/assets/images/rmslogo.png';
import styles from '@/styles/NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaKey } from 'react-icons/fa';

const NavBar = () => {
	const hamburgerMenuHandler = () => {
		console.log('clicked');
	};
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_container}>
				<Link className={styles.navbar_logo} href='/'>
					<Image
						src={logo}
						alt='rock musicians square logo'
						width={41}
						height={40}
					/>
					<span>R</span>ock<span>M</span>usicians<span>S</span>quare
				</Link>
				<div
					onClick={hamburgerMenuHandler}
					className={styles.navbar_hamburger_menu}
				>
					<GiHamburgerMenu size={25} />
				</div>
				<div className={styles.navbar_thread_links}>
					<ul>
						<Link href='/popular'>Popular</Link>
						<Link href='/latest'>Latest</Link>
					</ul>
				</div>
				<div className={styles.navbar_authentication_links}>
					<ul>
						<FaKey size={12} style={{ marginRight: '4px' }} color='#c0c0c0' />
						<Link href='/login'>Login</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
