import {Container, Title, TitleBold, ContainerSwitch,Switch,LabelSwitch,Link} from './styles';
import { Input } from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useState} from "react";
import {BACKGROUND_COLOR, PRIMARY, SECUNDARY} from "../../styles/colors";
import color from "color";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();
const PLACEHOLDER_COLOR_DARKEN = color(BACKGROUND_COLOR).darken(0.25).hex();

export const Login:React.FC=()=>{
    const [load,setload] =useState<boolean>(false)
    const [saveLogin, setSaveLogin] = useState<boolean>(false)
    const changeSaveLogin =()=> setSaveLogin(current=>!current)

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
                thumbColor={SECUNDARY}
                trackColor={{true: PRIMARY, false: PLACEHOLDER_COLOR_DARKEN}}
            />
            <LabelSwitch>PERMANECER LOGADO</LabelSwitch>
        </ContainerSwitch>
        <Link onPress={()=>{
            //navigation.navigate('Cadastro')
        }}>cadastrar</Link>
    </Container>)
}
