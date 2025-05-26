import type { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const CardBody: FC<Props> = ({ className = '', ...props }) => {
    return <div {...props} className={`relative w-full px-3 py-3 ${className}`} />;
};
