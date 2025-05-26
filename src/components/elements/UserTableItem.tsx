import type { FC } from 'react';
import type { IUser } from '../../types/interfaces/User';

type Props = {
    user: IUser;
};

export const UserTableItem: FC<Props> = ({ user }) => {
    const { name, email, role } = user;

    return (
        <tr className='relative w-full border border-gray-100 last:border-none'>
            <td className='text-base px-3 sm:px-6 py-4 whitespace-nowrap'>{name}</td>
            <td className='text-base px-3 sm:px-6 py-4 whitespace-nowrap'>{email}</td>
            <td className='font-medium text-base px-3 sm:px-6 py-4 whitespace-nowrap'>
                <span className='rounded px-2.5 py-1.5 text-lime-400 bg-[#191919]'>{role}</span>
            </td>
        </tr>
    );
};
