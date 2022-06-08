import * as yup from "yup";

export const cadastroValidator = yup.object({
    email: yup.string().email('Informe um email válido').required('E-mail é Obrigatória'),
    password: yup.string().min(6,'Senha precisa ter pelo menos 6 caracteres').required('Senha é Obrigatória'),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password'), null], 'Senha Precisa ser Igual'),
}).required();
