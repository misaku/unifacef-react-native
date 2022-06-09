import {Box, Container, Title, Text, Image} from './styles';
import {DefaultButton} from "../../components/DefaultButton";
import {useState} from "react";
import {Header} from "../../components/Header";
import {ScrollView} from "react-native";
import {Background} from "../../components/Background";

export const Detalhes: React.FC = () => {
    const [load, setload] = useState<boolean>(false)

    const change = async () => {
        setload(true);
        await (new Promise(resolve => setTimeout(resolve, 2000)))
        setload(false)
    }
    return (
        <Background>
            <Header title={'Nome do Game'}/>
            <ScrollView>
                <Image
                    source={{uri: "https://cdn.akamai.steamstatic.com/steam/apps/1372880/header.jpg?t=1641323785"}}
                />
                <Container>
                    <Box>
                        <Title>TIPO</Title>
                        <Text>Ação</Text>
                    </Box>
                    <Box marginBottom={20}>
                        <Title>DESCRIÇÃO</Title>
                        <Text>asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                            asdsadas sadsad sadsad asd
                        </Text>
                    </Box>
                    <DefaultButton title={'ADICIONAR AO CARRINHO'} loading={load} onPress={change}/>
                    <DefaultButton title={'COMPRAR'} loading={load} onPress={change}/>
                </Container>
            </ScrollView>
        </Background>
    )
}
