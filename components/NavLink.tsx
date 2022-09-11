import {useRouter} from 'next/router';
import Link from 'next/link';

interface Props {
	title: string;
	href: string;
}

const NavLink = ({title, href}: Props): JSX.Element => {
	const router = useRouter();

	return (
		<Link href={href}>
			<button
				type="button"
				className={`rounded-lg no-underline flex h-8 mr-0 pr-5 pl-5 
					items-center border-none cursor-pointer font-bold text-sm 
					${router.asPath === href ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-auto'}`}>
				{title}
			</button>
		</Link>
	);
};

export default NavLink;
