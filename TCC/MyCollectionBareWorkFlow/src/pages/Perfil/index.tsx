import {Button, Container, ContainerInput, Input} from "./styles";
import {DARKBACKGROUND} from "../../styles/colors";
import color from "color";
import {FontAwesome5} from '@expo/vector-icons';
import {useState} from "react";
import {Header} from "../../components/Header";

const PLACEHOLDER_COLOR = color(DARKBACKGROUND).lighten(0.5).hex();
const PLACEHOLDER_COLOR_DARKEN = color(DARKBACKGROUND).darken(0.25).hex();
export const Perfil: React.FC = () => {
    const [currentSecurety, setCurrentSecurety] = useState<boolean>(true)
    const [securety, setSecurety] = useState<boolean>(true)
    const [securetyConfirm, setSecuretyConfirm] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)

    const changeSecure = () => setSecurety(current => !current)
    const changeConfirm = () => setSecuretyConfirm(current => !current)
    const changeCurrentSecure = () => setCurrentSecurety(current => !current)
    const sendForm = async ()=>{
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve,3000));
        setLoading(false);
    }
    return (
        <>
            <Header title={'Perfil'}/>
            <Container>
                <ContainerInput>
                    <Input keyboardType={'email-address'} placeholder={'E-MAIL'} placeholderTextColor={PLACEHOLDER_COLOR}/>
                </ContainerInput>
                <ContainerInput>
                    <Input keyboardType={'default'} placeholder={'SENHA ATUAL'} secureTextEntry={currentSecurety}
                           placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                    <FontAwesome5 name={`eye${currentSecurety ? '' : '-slash'}`} size={26} color={PLACEHOLDER_COLOR}
                                  onPress={changeCurrentSecure}/>
                </ContainerInput>
                <ContainerInput>
                    <Input keyboardType={'default'} placeholder={'SENHA'} secureTextEntry={securety}
                           placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                    <FontAwesome5 name={`eye${securety ? '' : '-slash'}`} size={26} color={PLACEHOLDER_COLOR}
                                  onPress={changeSecure}/>
                </ContainerInput>
                <ContainerInput>
                    <Input keyboardType={'default'} placeholder={'CONFIRME A SENHA'} secureTextEntry={securetyConfirm}
                           placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                    <FontAwesome5 name={`eye${securetyConfirm ? '' : '-slash'}`} size={26} color={PLACEHOLDER_COLOR}
                                  onPress={changeConfirm}/>
                </ContainerInput>
                <Button title={'EDITAR'} loading={loading} onPress={sendForm}/>
            </Container>
        </>

    )
}
