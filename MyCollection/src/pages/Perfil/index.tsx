import {Container} from './styles';
import {Input} from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useState} from "react";
import {Header} from "../../components/Header";
import {Background} from "../../components/Background";
import {useAuth} from "../../hooks/Auth.hooks";

import {useToast} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {perfilValidator} from "./perfil.validator";
import {api} from "../../api";
import {ToastLayout} from "../../components/ToastLayout";
import {useMyTheme} from "../../hooks/Theme.hooks";
import { TabNavScreenNavigationProp } from '../../Routes/PrivateNavigation';

export const Perfil: React.FC = () => {
    const [load, setload] = useState<boolean>(false)
    const {theme} = useMyTheme()
    const toast = useToast();
    const navigation = useNavigation<TabNavScreenNavigationProp>()
    const { user, logout} = useAuth()

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(perfilValidator),
        defaultValues: {
            email: user?.email,
            password: '',
            newPassword: '',
            confirmPassword: ''
        }
    });


    const onSubmit = async (data: any) => {
        setload(true);
        try{
            const responseUserData =  await api.get('users', {
                params:{
                    email: data.email,
                    password: data.password
                }
            })

            const [userData] = responseUserData.data as any[];
            if(!!userData){
                const response =  await api.put(`users/${userData.id}`, {
                    email: userData.email,
                    password: data.newPassword,
                })
                 toast.show({
                    placement: "top-right",
                    render:({id})=>{
                        return ToastLayout.success({id, description: 'senha alterada com sucesso', close: toast.close})
                    }
                })
            }else {
                toast.show({
                    placement: "top-right",
                    render:({id})=>{
                        return ToastLayout.error({id, description: 'Senha inválida', close: toast.close})
                    }
                })
            }
        } catch (e: any){
            toast.show({
                placement: "top-right",
                render:({id})=>{
                    return ToastLayout.error({id, description: e.message, close: toast.close})
                }

            })
        }

        setload(false)
    }

    const goToHistorico = () =>{
        navigation.navigate('Historico')
    };

    return (
        <Background>
            <Header title={'Perfil'} backFalse/>
            <Container>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input placeholder='E-MAIL' keyboardType={'email-address'}
                               onBlur={onBlur}
                               onChangeText={onChange}
                               value={value}
                               error={errors.email?.message}
                               editable={false}
                        />
                    )}
                    name="email"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input placeholder='SENHA ATUAL'
                               secureTextEntry
                               onBlur={onBlur}
                               onChangeText={onChange}
                               value={value}
                               error={errors.password?.message}
                        />
                    )}
                    name="password"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input placeholder='NOVA SENHA'
                               secureTextEntry
                               onBlur={onBlur}
                               onChangeText={onChange}
                               value={value}
                               error={errors.newPassword?.message}
                        />
                    )}
                    name="newPassword"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input placeholder='CONFIRMACAO DE SENHA'
                               secureTextEntry
                               onBlur={onBlur}
                               onChangeText={onChange}
                               value={value}
                               error={errors.confirmPassword?.message}
                        />
                    )}
                    name="confirmPassword"
                />


                <DefaultButton title={'EDITAR'} loading={load} onPress={handleSubmit(onSubmit)}/>

                <DefaultButton title={'HISTORICO DE COMPRAS'} loading={load} onPress={goToHistorico}/>

                <DefaultButton style={{backgroundColor: theme.colors.secondary}} title={'LOGOUT'} loading={load} onPress={logout}/>
            </Container>
        </Background>
    )
}
