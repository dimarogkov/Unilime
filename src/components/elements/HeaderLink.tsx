import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import type { ILink } from '../../types/interfaces/Link';

type Props = {
    link: ILink;
};

export const HeaderLink: FC<Props> = ({ link }) => {
    const { href, text } = link;

    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                `header-link relative flex items-center justify-center h-full font-medium text-base px-1 sm:px-4 transition-colors duration-200 ${
                    isActive ? 'active text-lime-500' : ''
                }`
            }
        >
            {text}
        </NavLink>
    );
};
