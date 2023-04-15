import Link from 'next/link';
import styles from '@/styles/AuthenticationLinks.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';

const AuthenticationLinks = () => {
	return (
		<ul>
			<li className={styles.authentication_links_register_btn}>
				<BsFillPersonFill style={{ color: '#c0c0c0', marginRight: '1px' }} />
				<Link href='/register'>REGISTER</Link>
			</li>
			<li className={styles.authentication_links_login_btn}>
				<FaKey style={{ color: '#c0c0c0', marginRight: '1px' }} />
				<Link href='/login'>LOGIN</Link>
			</li>
		</ul>
	);
};
export default AuthenticationLinks;
