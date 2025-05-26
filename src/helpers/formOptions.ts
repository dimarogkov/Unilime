import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup
    .object({
        username: yup.string().trim().required('Missing name'),
        email: yup.string().trim().required('Missing email').email('Invalid email format'),
        rememberMe: yup.bool().required().oneOf([true], 'Remember me is required'),
    })
    .required();

export const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        username: '',
        age: 18,
        email: '',
        phone: '',
        select: 'default',
        password: '',
        confirmPassword: '',
        radioType: '',
        rememberMe: false,
    },
};
