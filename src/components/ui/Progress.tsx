import type { FC, HTMLAttributes } from 'react';
import { EnumProgress } from '../../types/enums';
import { RoleLabel } from './RoleLabel';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
    value: number;
    radius?: number;
    type?: EnumProgress;
    className?: string;
}

export const Progress: FC<Props> = ({ value, radius = 60, type = EnumProgress.line, className = '', ...props }) => {
    const size = radius * 2;
    const normalizedRadius = radius - 3;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <div
            {...props}
            className={cn(`relative rounded overflow-hidden ${className}`, {
                'w-full h-2 bg-gray-200': type === EnumProgress.line,
            })}
        >
            {type === EnumProgress.circle ? (
                <div className='relative' style={{ width: size }}>
                    <svg width={size} height={size}>
                        <circle
                            cx={radius}
                            cy={radius}
                            r={normalizedRadius}
                            fill='transparent'
                            strokeWidth={6}
                            className='stroke-gray-200'
                        />
                        <circle
                            r={normalizedRadius}
                            cx={radius}
                            cy={radius}
                            strokeLinecap='round'
                            fill='transparent'
                            strokeWidth={6}
                            strokeDasharray={`${circumference} ${circumference}`}
                            strokeDashoffset={strokeDashoffset}
                            transform={`rotate(-90 ${radius} ${radius})`}
                            className='stroke-lime-500 transition-all duration-300'
                        />
                    </svg>

                    <p className='absolute top-0 left-0 flex items-center justify-center font-medium text-base w-full h-full'>
                        <RoleLabel>{value}%</RoleLabel>
                    </p>
                </div>
            ) : (
                <span
                    className='absolute top-0 left-0 h-full rounded bg-lime-500 transition-all duration-300'
                    style={{ width: `${value}%` }}
                />
            )}
        </div>
    );
};
