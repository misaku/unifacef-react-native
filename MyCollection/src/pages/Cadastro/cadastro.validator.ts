import * as yup from "yup";

export const cadastroValidator = yup.object({
    email: yup.string().email('Informe um email válido').required('Campo obrigatório'),
    password: yup.string().min(6,'Senha deve ter pelo menos 6 caracteres').required('Campo obrigatório'),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
}).required();
