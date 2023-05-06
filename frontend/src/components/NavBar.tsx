import logo from '@/assets/images/rmslogo.png';
import styles from '@/styles/components/NavBar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaKey } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
	const hamburgerMenuHandler = () => {
		console.log('clicked');
	};
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__upper}>
				<Link href='/'>
					<Image
						src={logo}
						alt='rock musicians square logo'
						width={39}
						height={38}
					/>
					<h1>
						<span>R</span>ock<span>M</span>usicians<span>S</span>quare
					</h1>
				</Link>
				<div
					className={styles.navbar__upper__hamburger}
					onClick={hamburgerMenuHandler}
				>
					<GiHamburgerMenu size={23} />
				</div>
				<div className={styles.navbar__upper__desktop__auth__links}>
					<Link href='/register'>
						<FaKey size={9} style={{ marginRight: '4px' }} color='#c0c0c0' />
						REGISTER
					</Link>
					<Link href='/login'>
						<FaUser size={9} style={{ marginRight: '4px' }} color='#c0c0c0' />
						LOGIN
					</Link>
				</div>
			</div>
			<div className={styles.navbar__lower}>
				<div className={styles.navbar__lower__desktop__links}>
					<Link href='/categories'>
						<GiHamburgerMenu size={11} />
						CATEGORIES
					</Link>
					<Link href='/popular'>POPULAR TOPICS</Link>
					<Link href='/latest-topics'>LATEST TOPICS</Link>
					<Link href='/latest-posts'>LATEST POSTS</Link>
				</div>
				<div className={styles.navbar__lower__mobile__links}>
					<ul>
						<Link href='/popular'>Popular</Link>
						<Link href='/latest'>Latest</Link>
					</ul>
					<ul>
						<FaKey size={9} style={{ marginRight: '0.2rem' }} color='#c0c0c0' />
						<Link href='/login'>Login</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
