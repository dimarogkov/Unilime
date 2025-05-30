import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PATHS } from '../../variables';
import { OverviewPage, NotFoundPage, SettingsPage, UsersPage } from '../pages';
import { App } from '../../App';

export const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to={PATHS.OVERVIEW} replace />} />

                <Route path='/' element={<App />}>
                    <Route path={PATHS.OVERVIEW} element={<OverviewPage />} />
                    <Route path={PATHS.USERS} element={<UsersPage />} />
                    <Route path={PATHS.SETTINGS} element={<SettingsPage />} />
                    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
