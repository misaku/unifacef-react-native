import {ActionColumn, Box, Container, ItemContainer, Text, Title, Trash} from './styles';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useState} from "react";
import {Header} from "../../components/Header";
import {ScrollView} from "react-native";
import {Background} from "../../components/Background";

export const Carrinho: React.FC = () => {
    const [load, setload] = useState<boolean>(false)

    const change = async () => {
        setload(true);
        await (new Promise(resolve => setTimeout(resolve, 2000)))
        setload(false)
    }
    return (
        <Background>
            <Header title={'Meu Carrinho'} backFalse/>
            <ScrollView>
                <Container>
                    <Box marginBottom={10}>
                        <Title maxWidth={60}>AÇÃO</Title>
                        <Title>TITULO</Title>
                        <Title maxWidth={80} align={'right'}>VALOR</Title>
                    </Box>
                    <ItemContainer>
                        <ActionColumn maxWidth={71}>
                            <Trash name="trash" size={24} color="black"/>
                        </ActionColumn>
                        <Text>TITULO</Text>
                        <Text maxWidth={80} align={'right'}>R$18,10</Text>
                    </ItemContainer>
                    <ItemContainer>
                        <ActionColumn maxWidth={71}>
                            <Trash name="trash" size={24} color="black"/>
                        </ActionColumn>
                        <Text>TITULO</Text>
                        <Text maxWidth={80} align={'right'}>R$35,90</Text>
                    </ItemContainer>
                    <ItemContainer borderTop>
                        <Title noFlex>TITULO</Title>
                        <Text marginLeft={10} noFlex>R$35,90</Text>
                    </ItemContainer>

                </Container>

            </ScrollView>
            <Container>
                <DefaultButton  title={'FINALIZAR COMPRA'} loading={load} onPress={change}/>
            </Container>

        </Background>
    )
}
