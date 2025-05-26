import { useEffect, useState } from 'react';
import { USERS } from '../../variables';
import { UserTableItem } from '../elements';
import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

export const UsersTable = () => {
    const [isSortedActive, setIsSortedActive] = useState(true);
    const [users, setUsers] = useState(USERS);

    useEffect(() => {
        setUsers((prevState) => {
            return [...prevState].sort((a, b) =>
                isSortedActive
                    ? a.name.toUpperCase().localeCompare(b.name.toUpperCase())
                    : b.name.toUpperCase().localeCompare(a.name.toUpperCase())
            );
        });
    }, [isSortedActive]);

    const toggleSort = () => setIsSortedActive((prevState) => !prevState);

    return (
        <div className='relative w-full overflow-x-auto'>
            <table className='min-w-full rounded border border-gray-200'>
                <thead className='w-full bg-gray-100'>
                    <tr>
                        <th
                            className='flex items-center gap-2 text-left text-base font-medium px-3 sm:px-6 py-3 text-gray-700 tracking-wider cursor-pointer transition-colors hover:bg-gray-200'
                            onClick={toggleSort}
                        >
                            <span>Name</span>
                            {isSortedActive ? <ArrowDownAZ className='size-5' /> : <ArrowUpAZ className='size-5' />}
                        </th>
                        <th className='text-left text-base font-medium px-3 sm:px-6 py-3 text-gray-700 tracking-wider'>
                            Email
                        </th>
                        <th className='text-left text-base font-medium px-3 sm:px-6 py-3 text-gray-700 tracking-wider'>
                            Role
                        </th>
                    </tr>
                </thead>

                <tbody className='w-full bg-white'>
                    {users.map((user) => (
                        <UserTableItem key={user.name} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
