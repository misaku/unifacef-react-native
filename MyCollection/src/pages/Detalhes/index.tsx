import React from "react";
import {Container, Title, Text, Box, Image, LastBox} from './styles'
import {Header} from "../../components/Header";
import {ScrollView} from "react-native";
import {Background} from "../../components/Background";
import {DefaultButton} from "../../components/DefaultButton";

export const Detalhes: React.FC = () => {
    return (
        <Background>
            <Header title={'Nome do Game'}/>
            <ScrollView>
                <Image  source={{uri: 'https://cdn.akamai.steamstatic.com/steam/apps/1372880/header.jpg?t=1641323785'}}/>
                <Container>
                    <Box>
                        <Title>Tipo</Title>
                        <Text>acao</Text>
                    </Box>
                    <Box>
                        <Title>Valor</Title>
                        <Text>R$35.55</Text>
                    </Box>
                    <LastBox>
                        <Title>Descricao</Title>
                        <Text>acaoas ashdkjlsahdkjsahdkljsah dksajhdsakjhdsa
                            acaoas ashdkjlsahdkjsahdkljsah dksajhdsakjhdsa
                            acaoas ashdkjlsahdkjsahdkljsah dksajhdsakjhdsa
                            acaoas ashdkjlsahdkjsahdkljsah dksajhdsakjhdsa
                            acaoas ashdkjlsahdkjsahdkljsah dksajhdsakjhdsa
                        </Text>
                    </LastBox>
                    <DefaultButton title={'ADICIONAR AO CARRINHO'} onPress={()=>{}}/>
                    <DefaultButton title={'COMPRAR'} onPress={()=>{}}/>
                </Container>
            </ScrollView>
        </Background>
)
}
