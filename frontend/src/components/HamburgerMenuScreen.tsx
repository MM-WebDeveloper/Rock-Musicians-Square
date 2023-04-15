import styles from '@/styles/HamburgerMenuScreen.module.css';
import HamburgerMenuLink from './HamburgerMenuLink';

const categories = [
	{ endpoint: 'luthiers-corner' },
	{ endpoint: 'introductions' },
];

interface HamburgerMenuScreenProps {
	showMenu: (bool: boolean) => void;
}

const HamburgerMenuScreen = ({ showMenu }: HamburgerMenuScreenProps) => {
	return (
		<div className={styles.hamburger_menu_screen}>
			<div className={styles.hamburger_menu_screen_container}>
				<p>500 online</p>
				<ul>
					{categories.map((category) => (
						<div
							className={styles.hamburger_menu_screen_link}
							key={category.endpoint}
							onClick={() => showMenu(false)}
						>
							<HamburgerMenuLink endpoint={category.endpoint} />
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};
export default HamburgerMenuScreen;
