import logo from '@/assets/images/rmslogo.png';
import Image from 'next/image';
import styles from '@/styles/NavBar.module.css';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_container}>
				<Link className={styles.logo} href='/'>
					<Image
						src={logo}
						alt='rock musicians square logo'
						width={41}
						height={40}
					/>
					<span>R</span>ock<span>M</span>usicians<span>S</span>quare
				</Link>
				<ul>
					<li>
						<Link href='/register'>REGISTER</Link>
					</li>
					<li>
						<Link href='/login'>LOGIN</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default NavBar;
