import React, {ReactNode} from 'react';
import ExtLink from './ExtLink';
import {Twitter, Linkedin, Book} from 'react-feather';
import personalInfo from './data/personalInfo.json'


interface BoxProps {
    href: string;
    label: string;
    onClick?: () => void;
    children: ReactNode;
};

const Box = ({href, label, onClick, children}: BoxProps) => (
    <a target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={label}
        className="items-center justify-center cursor-pointer transition-colors rounded-md select-none w-7 h-7"
        onClick={onClick}>
        {children}
    </a>
);


const Footer = (): JSX.Element => {
    const iconStyle = "hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md";

    return (
        <footer>
            <div className="mb-9 pb-0 pl-6 max-w-4xl flex items-center justify-between text-sm opacity-60 m-auto pt-20 pr-5">
                <p> &copy; {new Date().getFullYear()}. {personalInfo.copyright}</p>


                <div className="flex justify-between w-44">
                    <Box href={personalInfo.socialMedia.Twitter} label="Twitter">
                        <abbr title="Twitter">
                            <Twitter size={35} className={iconStyle} aria-label="Twitter"/>
                        </abbr>
                    </Box>
                    <Box href={personalInfo.socialMedia.LinkedIn} label="LinkedIn">
                        <abbr title="LinkedIn">
                            <Linkedin size={35} className={iconStyle} aria-label="LinkedIn"/>
                        </abbr>
                    </Box>
                    <Box href={personalInfo.socialMedia.GoogleScholar} label="GoogleScholar">
                        <abbr title="GoogleScholar">
                            <Book size={35} className={iconStyle} aria-label="GoogleScholar"/>
                        </abbr>
                    </Box>
                </div>    
            </div>
            
            <p className="text-center text-sm opacity-40 dark:opacity-50 pb-4 pt-4">
                Built with <i>Next.js, Preact, TailwindCSS, Vercel</i> and <a href = {personalInfo.love}>💛</a>
                . {' '}
            </p>
        </footer>
    );
};

export default Footer;
