import type { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const CardWrapper: FC<Props> = ({ className = '', ...props }) => {
    return <div {...props} className={`relative flex flex-col justify-between w-full rounded border border-gray-200 ${className}`} />;
};
