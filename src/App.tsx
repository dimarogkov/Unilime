import { Outlet } from 'react-router-dom';
import { Header } from './components/blocks';

export const App = () => {
    return (
        <>
            <Header />

            <main className='relative container py-7 lg:py-10'>
                <Outlet />
            </main>
        </>
    );
};
