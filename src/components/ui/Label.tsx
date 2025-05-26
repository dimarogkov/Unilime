import type { FC, LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

export const Label: FC<Props> = ({ className = '', ...props }) => {
    return <label {...props} className={`relative block w-full text-base ${className}`} />;
};
