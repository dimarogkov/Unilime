import type { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: FC<Props> = ({ className = '', ...props }) => {
    return (
        <input
            {...props}
            className={`w-full h-10 md:h-11 px-4 rounded border border-gray-200 bg-transparent outline-none transition-all duration-300 focus:border-lime-500 ${className}`}
        />
    );
};
