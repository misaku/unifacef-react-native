import * as yup from "yup";

export const loginValidator = yup.object({
    email: yup.string().email('Informe um email válido').required('E-mail é Obrigatória'),
    password: yup.string().min(6,'Senha precisa ter pelo menos 6 caracteres').required('Senha é Obrigatória'),
}).required();
