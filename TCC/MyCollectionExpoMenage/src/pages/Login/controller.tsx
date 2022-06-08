import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {Control, FieldErrors, useForm} from "react-hook-form";
import {loginValidator} from "./login.validator";
import {yupResolver} from "@hookform/resolvers/yup";
import {api} from "../../api";
import {useToast} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {ToastLayout} from "../../components/ToastLayout";
import {useMyTheme} from "../../hooks/Theme.hooks";
import color from "color";
import {useAuth} from "../../hooks/Auth.hooks";
import {LoginScreenNavigationProp} from "../../Routes/OpenNavigation";

type LoginData = {
    email: string;
    password: string;
};

interface LoginControllerProps{
    load: boolean;
    control: Control<LoginData>;
    sendForm(data:any):Promise<void>;
    goToCadastro():void;
    errors: FieldErrors<LoginData>;
    saveLogin:boolean;
    changeSaveLogin():void;
}
const LoginControllerContext = createContext<LoginControllerProps>({} as any)

export const LoginControllerProvider: React.FC = ({children})=>{
    const [load, setload] = useState<boolean>(false)
    const [saveLogin, setSaveLogin] = useState<boolean>(false)


    const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: yupResolver(loginValidator),
        defaultValues: {
            email: '',
            password: '',
        }
    });
    const {getSaveLogin, login} = useAuth()
    const navigation = useNavigation<LoginScreenNavigationProp>()
    const toast = useToast();


    const goToCadastro = () => navigation.navigate('Cadastro');

    const changeSaveLogin =()=> setSaveLogin(current=>!current)

    const sendForm = handleSubmit(
        async (dataForm: any) => {
            setload(true);
            try{
                const response =  await api.get('users', {
                    params:{
                        ...dataForm
                    }
                })

                const [data] = response.data as any[];
                if(!!data){
                    const {email, id} = data;
                    await login({email, id}, saveLogin)
                }else {
                    setload(false)
                    toast.show({
                        placement: "top-right",
                        render:({id})=>{
                            return ToastLayout.error({id, description: 'e-mail/password inválido(s)', close: toast.close})
                        }
                    })
                }
            } catch (e: any){
                setload(false)
                toast.show({
                    placement: "top-right",
                    render:({id})=>{
                        return ToastLayout.error({id, description: e.message, close: toast.close})
                    }

                })
            }

        }
    ) ;

    useEffect(()=>{
        (async()=>{
            await getSaveLogin();
        })()
    },[])

    return (
        <LoginControllerContext.Provider value={{control, load, errors, sendForm, goToCadastro, saveLogin, changeSaveLogin}}>
            {children}
        </LoginControllerContext.Provider>
    )
}

export const useLoginController:()=>LoginControllerProps = ()=>{
    return useContext<LoginControllerProps>(LoginControllerContext);
}
