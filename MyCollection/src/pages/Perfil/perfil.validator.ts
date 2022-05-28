import * as yup from "yup";


export const perfilValidator = yup.object({
    email: yup.string().email('Informe um email válido').required('E-mail é Obrigatória'),
    password: yup.string().min(6,'Senha precisa ter pelo menos 6 caracteres').required('Senha é Obrigatória'),
    newPassword: yup.string().min(6,'Senha precisa ter pelo menos 6 caracteres').required('Senha é Obrigatória'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('newPassword'), null], 'Senha Precisa ser Igual'),
}).required();
