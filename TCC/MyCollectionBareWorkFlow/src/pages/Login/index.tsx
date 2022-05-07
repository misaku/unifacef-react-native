import {
    Button,
    Container,
    ContainerInput,
    ContainerSwitch,
    Input,
    LabelSwitch,
    Link,
    Switch,
    Title,
    TitleBold
} from "./styles";
import {DARKBACKGROUND, PRIMARY} from "../../styles/colors";
import color from "color";
import {FontAwesome5} from '@expo/vector-icons';
import {useState} from "react";

const PLACEHOLDER_COLOR = color(DARKBACKGROUND).lighten(0.5).hex();
const PLACEHOLDER_COLOR_DARKEN = color(DARKBACKGROUND).darken(0.25).hex();
export const Login: React.FC = ()=>{
    const [securety, setSecurety] = useState<boolean>(true)
    const [saveLogin, setSaveLogin] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const changeSecure =()=> setSecurety(current=>!current)
    const changeSaveLogin =()=> setSaveLogin(current=>!current)
    const sendForm = async ()=>{
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve,3000));
        setLoading(false);
    }

    return (
        <Container>
            <Title><TitleBold>My</TitleBold>Collection</Title>
            <ContainerInput>
                <Input keyboardType={'email-address'} placeholder={'E-MAIL'} placeholderTextColor={PLACEHOLDER_COLOR}/>
            </ContainerInput>
            <ContainerInput>
                <Input keyboardType={'default'} placeholder={'SENHA'} secureTextEntry={securety} placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                <FontAwesome5 name={`eye${securety?'':'-slash'}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecure}/>
            </ContainerInput>
            <Button title={'ENTRAR'} loading={loading} onPress={sendForm}/>
            <ContainerSwitch>
                <Switch
                    onChange={changeSaveLogin}
                    value={saveLogin}
                    thumbColor={PLACEHOLDER_COLOR}
                    trackColor={{true: PRIMARY, false: PLACEHOLDER_COLOR_DARKEN}}
                />
                <LabelSwitch>PERMANECER LOGADO</LabelSwitch>
            </ContainerSwitch>
            <Link onPress={()=>{}}>cadastrar</Link>

        </Container>
    )
}
