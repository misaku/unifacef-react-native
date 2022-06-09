import {Container, Title, TitleBold} from './styles';
import { Input } from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import {useState} from "react";
import {Header} from "../../components/Header";
export const Cadastro:React.FC=()=>{
    const [load,setload] =useState<boolean>(false)

    const change= async ()=>{
        setload(true);
        await (new Promise(resolve => setTimeout(resolve,2000)))
        setload(false)
    }
    return(<>
        <Header title={'Cadastro'} />
        <Container>

            <Input placeholder='E-MAIL' keyboardType={'email-address'}/>
            <Input placeholder='SENHA' secureTextEntry />
            <Input placeholder='CONFIRMACAO DE SENHA' secureTextEntry />
            <DefaultButton title={'CADASTRAR'}  loading={load} onPress={change}/>
        </Container>
        </>
        )
}
