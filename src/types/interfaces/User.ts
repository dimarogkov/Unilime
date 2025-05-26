import type { EnumRole } from '../enums';

export interface IUser {
    name: string;
    email: string;
    role: EnumRole;
}
