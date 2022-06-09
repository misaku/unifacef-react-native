import {Container, ContainerSwitch, LabelSwitch, Link, Switch, Title, TitleBold} from './styles';
import {Input} from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useEffect, useState} from "react";
import {Background} from "../../components/Background";
import {useNavigation} from "@react-navigation/native";
import color from "color";
import {BACKGROUND_COLOR, PRIMARY, SECUNDARY} from "../../styles/colors";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginValidator} from "./login.validator";
import {api} from "../../api";
import {ToastLayout} from "../../components/ToastLayout";
import {useToast} from "native-base";
import {useAuth} from "../../hooks/Auth.hooks";


const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();
const PLACEHOLDER_COLOR_DARKEN = color(BACKGROUND_COLOR).darken(0.25).hex();


export const Login: React.FC = () => {
    const [load, setload] = useState<boolean>(false)
    const [saveLogin, setSaveLogin] = useState<boolean>(false)

    const {getSaveLogin, login} = useAuth()
    const toast = useToast();
    const navigation = useNavigation()
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginValidator),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const changeSaveLogin =()=> setSaveLogin(current=>!current)

    const onSubmit = async (dataForm: any) => {
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
                toast.show({
                    placement: "top-right",
                    render:({id})=>{
                        return ToastLayout.error({id, description: 'e-mail/password inválido(s)', close: toast.close})
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

    useEffect(()=>{
        (async()=>{
            await getSaveLogin();
        })()
    },[])

    return (
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
                <DefaultButton title={'ENTRAR'} loading={load} onPress={handleSubmit(onSubmit)}/>
                <ContainerSwitch>
                    <Switch
                        onChange={changeSaveLogin}
                        value={saveLogin}
                        thumbColor={SECUNDARY}
                        trackColor={{true: PRIMARY, false: PLACEHOLDER_COLOR_DARKEN}}
                    />
                    <LabelSwitch>PERMANECER LOGADO</LabelSwitch>
                </ContainerSwitch>
                <Link onPress={()=>{
                    navigation.navigate('Cadastro')
                }}>cadastrar</Link>
            </Container>
        </Background>
    )
}
