import {Container, ContainerSwitch, LabelSwitch, Link, Switch, Title, TitleBold} from './styles';
import {Input} from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useMemo, useState} from "react";
import color from "color";
import {useMyTheme} from "../../hooks/Theme.hooks";
import {Background} from "../../components/Background";
import {useNavigation} from "@react-navigation/native";
import {CadastroControllerProvider} from "../Cadastro/controller";
import {CadastroLayout} from "../Cadastro";
import {LoginControllerProvider, useLoginController} from "./controller";
import { Controller } from "react-hook-form";

const LoginLayout:React.FC=()=>{

    const {
        control,
        errors,
        sendForm,
        load,
        goToCadastro,
        saveLogin,
        changeSaveLogin
    } = useLoginController()

    const { theme } = useMyTheme();
    const PLACEHOLDER_COLOR = useMemo(()=>color(theme.colors.background).lighten(0.5).hex(),[theme]);
    const PLACEHOLDER_COLOR_DARKEN = useMemo(()=>color(theme.colors.background).darken(0.25).hex(),[theme]);


    return(
        <Background>
            <Container>
                <Title><TitleBold>My</TitleBold>Collection</Title>
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
                <DefaultButton title={'ENTRAR'} loading={load} onPress={sendForm}/>
                <ContainerSwitch>
                    <Switch
                        onChange={changeSaveLogin}
                        value={saveLogin}
                        thumbColor={theme.colors.secondary}
                        trackColor={{true: theme.colors.primary, false: PLACEHOLDER_COLOR_DARKEN}}
                    />
                    <LabelSwitch>PERMANECER LOGADO</LabelSwitch>
                </ContainerSwitch>
                <Link onPress={goToCadastro}>cadastrar</Link>
            </Container>
        </Background>
        )
}
export const Login:React.FC = ()=>{
    return (
        <LoginControllerProvider>
            <LoginLayout />
        </LoginControllerProvider>
    )
}
