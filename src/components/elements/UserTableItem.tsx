import type { FC } from 'react';
import type { IUser } from '../../types/interfaces/User';
import { RoleLabel } from '../ui';

type Props = {
    user: IUser;
};

export const UserTableItem: FC<Props> = ({ user }) => {
    const { name, email, role } = user;

    return (
        <tr className='relative w-full border border-gray-200 last:border-none'>
            <td className='text-base px-3 sm:px-6 py-4 whitespace-nowrap'>{name}</td>
            <td className='text-base px-3 sm:px-6 py-4 whitespace-nowrap'>{email}</td>
            <td className='font-medium text-base px-3 sm:px-6 py-4 whitespace-nowrap'>
                <RoleLabel>{role}</RoleLabel>
            </td>
        </tr>
    );
};
