import logo from '@/assets/images/rmslogo.png';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/NavbarLogo.module.css';

interface NavbarLogoProps {
	showMenu: (bool: boolean) => void;
}

const NavbarLogo = ({ showMenu }: NavbarLogoProps) => {
	return (
		<div onClick={() => showMenu(false)}>
			<Link className={styles.navbar_logo} href='/'>
				<Image
					src={logo}
					alt='rock musicians square logo'
					width={41}
					height={40}
				/>
				<span>R</span>ock<span>M</span>usicians<span>S</span>quare
			</Link>
		</div>
	);
};
export default NavbarLogo;
