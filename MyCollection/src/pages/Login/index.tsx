import {Container, ContainerSwitch, LabelSwitch, Link, Switch, Title, TitleBold} from './styles';
import {Input} from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useMemo, useState} from "react";
import color from "color";
import {useMyTheme} from "../../hooks/Theme.hooks";


export const Login:React.FC=()=>{
    const [load,setload] =useState<boolean>(false)
    const [saveLogin, setSaveLogin] = useState<boolean>(false)
    const changeSaveLogin =()=> setSaveLogin(current=>!current)
    const { theme } = useMyTheme();
    const PLACEHOLDER_COLOR = useMemo(()=>color(theme.colors.background).lighten(0.5).hex(),[theme]);
    const PLACEHOLDER_COLOR_DARKEN = useMemo(()=>color(theme.colors.background).darken(0.25).hex(),[theme]);
    const change= async ()=>{
        setload(true);
        await (new Promise(resolve => setTimeout(resolve,2000)))
        setload(false)
    }
    return(<Container>
        <Title><TitleBold>My</TitleBold>Collection</Title>
        <Input placeholder='E-MAIL' keyboardType={'email-address'}/>
        <Input placeholder='SENHA' secureTextEntry />
        <DefaultButton title={'ENTRAR'}  loading={load} onPress={change}/>
        <ContainerSwitch>
            <Switch
                onChange={changeSaveLogin}
                value={saveLogin}
                thumbColor={theme.colors.secondary}
                trackColor={{true: theme.colors.primary, false: PLACEHOLDER_COLOR_DARKEN}}
            />
            <LabelSwitch>PERMANECER LOGADO</LabelSwitch>
        </ContainerSwitch>
        <Link onPress={()=>{
            //navigation.navigate('Cadastro')
        }}>cadastrar</Link>
    </Container>)
}
