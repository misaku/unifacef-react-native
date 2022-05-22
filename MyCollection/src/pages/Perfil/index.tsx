import {Container, Title, TitleBold} from './styles';
import { Input } from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import {useState} from "react";
import {Header} from "../../components/Header";
export const Perfil:React.FC=()=>{
    const [load,setload] =useState<boolean>(false)

    const change= async ()=>{
        setload(true);
        await (new Promise(resolve => setTimeout(resolve,2000)))
        setload(false)
    }
    return(<>
        <Header title={'Perfil'} />
        <Container>

            <Input placeholder='E-MAIL' keyboardType={'email-address'}/>
            <Input placeholder='SENHA ATUAL' secureTextEntry />
            <Input placeholder='NOVA SENHA' secureTextEntry />
            <Input placeholder='CONFIRMACAO DE SENHA' secureTextEntry />
            <DefaultButton title={'EDITAR'}  loading={load} onPress={change}/>
        </Container>
        </>
        )
}
