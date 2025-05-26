import { UsersTable } from '../blocks';

export const UsersPage = () => {
    return (
        <section className='relative w-full'>
            <h1 className='font-semibold text-2xl mb-7 lg:mb-10 last:mb-0'>Users Page</h1>
            <UsersTable />
        </section>
    );
};
