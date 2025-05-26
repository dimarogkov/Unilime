import type { ButtonHTMLAttributes, FC } from 'react';
import { EnumBtn } from '../../types/enums';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: EnumBtn;
    className?: string;
}

export const Btn: FC<Props> = ({ btnType = EnumBtn.default, className = '', ...props }) => {
    return (
        <button
            {...props}
            className={cn(
                `flex items-center justify-center gap-2 w-full sm:w-fit sm:min-w-[120px] h-10 md:h-11 font-media text-base px-4 rounded cursor-pointer transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'bg-gray-300 text-white pointer-events-none': props.disabled,
                    'bg-lime-500 text-white': !props.disabled && btnType === EnumBtn.default,
                    'border-2 border-lime-500 text-lime-500': !props.disabled && btnType === EnumBtn.outline,
                    'bg-gray-500 text-white': !props.disabled && btnType === EnumBtn.disabled,
                }
            )}
        />
    );
};
