import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

interface HamburgerMenuProps {
	showMenu: (bool: boolean) => void;
	openMenu: boolean;
}

const HamburgerMenu = ({ showMenu, openMenu }: HamburgerMenuProps) => {
	return (
		<>
			{openMenu ? (
				<RxCross2
					style={{ color: '#c0c0c0' }}
					size={25}
					onClick={() => showMenu(false)}
				/>
			) : (
				<GiHamburgerMenu
					style={{ color: '#c0c0c0' }}
					size={25}
					onClick={() => showMenu(true)}
				/>
			)}
		</>
	);
};
export default HamburgerMenu;
