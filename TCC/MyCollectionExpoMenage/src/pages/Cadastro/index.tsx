import {Container} from './styles';
import {Input} from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useState} from "react";
import {Header} from "../../components/Header";
import {Background} from "../../components/Background";
import { Controller } from "react-hook-form";
import {CadastroControllerProvider, useCadastroController} from "./controller";


export const CadastroLayout: React.FC = () => {
    const {
        load,
        control,
        sendForm,
        errors,
    } = useCadastroController()

    return (
        <Background>
            <Header title={'Cadastro'}/>
            <Container>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                         <Input placeholder='E-MAIL'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                         error={errors.email?.message}
                        keyboardType={'email-address'}/>
                    )}
                    name="email"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input placeholder='CONFIRMACAO DE SENHA'
                               onBlur={onBlur}
                               secureTextEntry
                               onChangeText={onChange}
                               value={value}
                               error={errors.passwordConfirm?.message}
                               keyboardType={'email-address'}/>
                    )}
                    name="passwordConfirm"
                />
                <DefaultButton title={'CADASTRAR'} loading={load} onPress={sendForm}/>
            </Container>
        </Background>
    )
}

export const Cadastro:React.FC = ()=>{
    return (
        <CadastroControllerProvider>
            <CadastroLayout />
        </CadastroControllerProvider>
    )
}
