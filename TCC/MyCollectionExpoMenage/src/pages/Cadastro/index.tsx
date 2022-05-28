import {Container} from './styles';
import {Input} from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useState} from "react";
import {Header} from "../../components/Header";
import {Background} from "../../components/Background";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {cadastroValidator} from "./cadastro.validator";


import {useToast} from "native-base";
import {ToastLayout} from "../../components/ToastLayout";
import {api} from "../../api";
import {useNavigation} from "@react-navigation/native";

export const Cadastro: React.FC = () => {
    const [load, setload] = useState<boolean>(false)
    const toast = useToast();
    const navigation = useNavigation()
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(cadastroValidator),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (data: any) => {
        setload(true);
        try{
            const response =  await api.post('users', {
                email: data.email,
                password: data.password
            })
            navigation.goBack();
            toast.show({
                placement: "top-right",
                render:({id})=>{
                    return ToastLayout.success({id, description: 'usuário cadastrado com sucesso', close: toast.close})
                }

            })
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
    return (
        <Background>
            <Header title={'Cadastro'}/>
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
                        <Input placeholder='SENHA'
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


                <DefaultButton title={'CADASTRAR'} loading={load} onPress={handleSubmit(onSubmit)}/>
            </Container>
        </Background>
    )
}
