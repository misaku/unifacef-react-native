import * as yup from "yup";


export const perfilValidator = yup.object({
    email: yup.string().email('Informe um email válido').required('Campo Obrigatório'),
    password: yup.string().min(6,'Senha deve ter pelo menos 6 caracteres').required('Campo Obrigatório'),
    newPassword: yup.string().min(6,'Senha deve ter pelo menos 6 caracteres').required('Campo Obrigatório'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('newPassword'), null], 'As senhas devem ser iguais'),
}).required();
