import { EnumRole } from '../types/enums';
import type { IUser } from '../types/interfaces/User';

export const USERS: IUser[] = [
    {
        name: 'Ethan Carter',
        email: 'ethan.carter@example.com',
        role: EnumRole.Admin,
    },
    {
        name: 'Luna Monroe',
        email: 'luna.monroe@example.com',
        role: EnumRole.User,
    },
    {
        name: 'Maxwell Reed',
        email: 'max.reed@example.com',
        role: EnumRole.User,
    },
    {
        name: 'Sophie Blake',
        email: 'sophie.blake@example.com',
        role: EnumRole.User,
    },
    {
        name: 'Jaxon Pierce',
        email: 'jaxon.pierce@example.com',
        role: EnumRole.Admin,
    },
];
