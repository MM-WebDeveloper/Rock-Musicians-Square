import styles from '@/styles/MobileNavbar.module.css';
import { useState } from 'react';
import HamburgerMenuScreen from './HamburgerMenuScreen';
import NavbarLogo from './NavbarLogo';
import HamburgerMenu from './HamburgerMenu';
import AuthenticationLinks from './AuthenticationLinks';
import Link from 'next/link';

const MobileNavbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const showMenu = (bool: boolean) => {
		setOpenMenu(bool);
	};

	return (
		<nav className={styles.mobile_navbar}>
			<div className={styles.mobile_navbar_container}>
				<NavbarLogo showMenu={showMenu} />
				<HamburgerMenu openMenu={openMenu} showMenu={showMenu} />
			</div>
			{!openMenu && (
				<div className={styles.mobile_navbar_links}>
					<ul>
						<li>
							<Link href='/popular'>POPULAR</Link>
						</li>
						<li className='mg-l-5'>
							<Link href='/latest'>LATEST</Link>
						</li>
					</ul>
					<AuthenticationLinks />
				</div>
			)}
			{openMenu && <HamburgerMenuScreen showMenu={showMenu} />}
		</nav>
	);
};
export default MobileNavbar;
