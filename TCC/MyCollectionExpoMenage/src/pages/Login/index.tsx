import {Container, Title, TitleBold, Link} from './styles';
import {Input} from '../../components/Input';
import {DefaultButton} from "../../components/DefaultButton";
import {useState} from "react";
import {Background} from "../../components/Background";
import  { useNavigation } from "@react-navigation/native";

export const Login: React.FC = () => {
    const [load, setload] = useState<boolean>(false)

    const change = async () => {
        setload(true);
        await (new Promise(resolve => setTimeout(resolve, 2000)))
        setload(false)
    }
    const navigation = useNavigation()
    return (
        <Background>
            <Container>
                <Title><TitleBold>My</TitleBold>Collection</Title>
                <Input placeholder='E-MAIL' keyboardType={'email-address'}/>
                <Input placeholder='SENHA' secureTextEntry/>
                <DefaultButton title={'ENTRAR'} loading={load} onPress={change}/>
                <Link onPress={()=>{
                    navigation.navigate('Cadastro')
                }}>cadastrar</Link>
            </Container>
        </Background>
    )
}
