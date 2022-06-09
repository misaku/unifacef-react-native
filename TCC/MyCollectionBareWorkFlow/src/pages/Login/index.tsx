import {Container, Title, TitleBold} from './styles';
import { Input } from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import {useState} from "react";
export const Login:React.FC=()=>{
    const [load,setload] =useState<boolean>(false)

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
    </Container>)
}
