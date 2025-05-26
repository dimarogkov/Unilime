import { ACTIVITIES } from '../../variables';
import { Progress, RoleLabel } from '../ui';

export const Activities = () => {
    return (
        <div className='relative flex flex-col gap-2 sm:gap-4 w-full'>
            {ACTIVITIES.map(({ value, label }) => (
                <div key={label} className='flex flex-wrap items-center justify-between w-full'>
                    <p className='text-base'>{label}</p>

                    <div className='flex items-center gap-4 w-full sm:w-2/3'>
                        <Progress value={value} />
                        <RoleLabel>{value}%</RoleLabel>
                    </div>
                </div>
            ))}
        </div>
    );
};
