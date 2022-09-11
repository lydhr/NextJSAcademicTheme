import {useState, useEffect} from 'react';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {useTheme} from 'next-themes';

import ExtLink from './ExtLink';
import Header from './Header';
import Footer from './Footer';

interface Props {
	children: React.ReactNode;
}

const Layout = ({children}: Props): JSX.Element => {
	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const {resolvedTheme, setTheme} = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	useScrollPosition(({currPos}) => {
		if (currPos.y <= -20) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}, [scrolled]);

	return (
		<>
			<Header mounted = {mounted} resolvedTheme = {resolvedTheme} setTheme = {setTheme} scrolled = {scrolled}/>
			<main>{children}</main>
			<Footer/>
		</>
	);
};

export default Layout;
