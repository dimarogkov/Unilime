/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { formOptions } from '../../helpers';
import { EnumBtn } from '../../types/enums';
import { Btn, Checkbox, ErrorMessage, Input, Label, ToggleBtn } from '../ui';

export const Form = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted },
    } = useForm(formOptions);

    const onSubmit = (data: any) => console.log(data);

    return (
        <form className='flex flex-col gap-4 w-full md:max-w-[50%]' onSubmit={handleSubmit(onSubmit)}>
            <ToggleBtn />

            <Label className='flex flex-col gap-2'>
                <Input {...register('username')} placeholder='Username' />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register('email')} placeholder='Email' />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Checkbox {...register('rememberMe')} isChecked={watch('rememberMe')} label='Remember me' />
                {errors.rememberMe && <ErrorMessage>{errors.rememberMe.message}</ErrorMessage>}
            </Label>

            <div className='flex flex-wrap gap-2 w-full'>
                <Btn type='submit'>Send</Btn>

                <Btn type='button' btnType={EnumBtn.disabled} disabled={!isSubmitted} onClick={() => reset()}>
                    Reset
                </Btn>
            </div>
        </form>
    );
};
