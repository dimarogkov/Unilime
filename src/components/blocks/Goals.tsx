import { EnumProgress } from '../../types/enums';
import { GOALS } from '../../variables';
import { Progress } from '../ui';

export const Goals = () => {
    return (
        <div className='relative grid sm:grid-cols-2 gap-4 w-full'>
            {GOALS.map(({ value, label }) => (
                <div key={label} className='flex flex-col items-center gap-5 w-full'>
                    <Progress type={EnumProgress.circle} radius={70} value={value} />
                    <p className='text-base'>{label}</p>
                </div>
            ))}
        </div>
    );
};
