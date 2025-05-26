import { UsersTable } from '../blocks';
import { Title } from '../ui';

export const UsersPage = () => {
    return (
        <section className='relative w-full'>
            <Title text='Users Page' className='mb-7 lg:mb-10 last:mb-0' />
            <UsersTable />
        </section>
    );
};
