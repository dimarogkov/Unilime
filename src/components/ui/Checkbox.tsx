import type { FC, InputHTMLAttributes } from 'react';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isChecked: boolean;
    label?: string;
    className?: string;
}

export const Checkbox: FC<Props> = ({ isChecked, label, className = '', ...props }) => (
    <div className={`flex items-center gap-2 cursor-pointer ${className}`}>
        <div className='relative size-5 min-w-5'>
            <input
                {...props}
                type='checkbox'
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
            />

            <span
                className={cn('flex items-center justify-center w-full h-full bg-transparent rounded border', {
                    'border-gray-200': !isChecked,
                    'border-lime-500 bg-white': isChecked,
                })}
            >
                <Check
                    className={cn('size-4 text-lime-500', {
                        'opacity-0 invisible': !isChecked,
                        'opacity-100 visible': isChecked,
                    })}
                />
            </span>
        </div>

        {label && <p className='text-base'>{label}</p>}
    </div>
);
