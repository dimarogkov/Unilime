import type { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

export const ErrorMessage: FC<Props> = ({ className = '', ...props }) => {
    return <p {...props} className={`w-full font-medium text-sm text-red-500 ${className}`} />;
};
