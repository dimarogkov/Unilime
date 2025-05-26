import { UsersTable } from '../blocks';
import { Title } from '../ui';

export const UsersPage = () => {
    return (
        <section className='relative w-full'>
            <Title className='mb-7 last:mb-0'>Users Page</Title>
            <UsersTable />
        </section>
    );
};
