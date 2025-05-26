import { Link } from 'react-router-dom';
import { LINKS, PATHS } from '../../variables';
import { HeaderLink } from '../elements';

export const Header = () => {
    return (
        <header className='sticky top-0 left-0 w-full h-16 lg:h-20 shadow-lg bg-white overflow-hidden'>
            <div className='container flex items-center justify-between h-full'>
                <Link
                    to={PATHS.OVERVIEW}
                    className='font-medium text-lg sm:text-xl lg:text-2xl text-lime-400 bg-[#191919] px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-lg transition-all duration-200 hover:opacity-70 active:translate-y-0.5'
                >
                    Unilime
                </Link>

                <div className='flex w-fit h-full'>
                    {LINKS.map((link) => (
                        <HeaderLink key={link.text} link={link} />
                    ))}
                </div>
            </div>
        </header>
    );
};
