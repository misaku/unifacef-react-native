import * as yup from "yup";

export const loginValidator = yup.object({
    email: yup.string().email('Informe um email válido').required('Campo Obrigatório'),
    password: yup.string().min(6,'Senha deve ter pelo menos 6 caracteres').required('Campo Obrigatório'),
}).required();
