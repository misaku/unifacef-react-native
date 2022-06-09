import {ActionColumn, Box, Container, ItemContainer, Text, Title, Trash} from './styles';
import React, {useMemo, useState} from 'react';
import {Header} from "../../components/Header";
import {ScrollView} from "react-native";
import {Background} from "../../components/Background";
import {useHistoricoStore} from '../../store/Historico.store';

export const Historico: React.FC = () => {

    const historico = useHistoricoStore(state => state.historico)

    return (
        <Background>
            <Header title={'Historico de Compras'} />
            <ScrollView>
                <Container>
                    <Box marginBottom={10}>
                        <Title>TITULO</Title>
                        <Title maxWidth={80} align={'right'}>VALOR</Title>
                    </Box>
                    {historico.map((item, index)=>(
                      <ItemContainer key={`item-${item.jogoId}-${index}`} par={(index+1)%2===0}>
                          <Text>{item.titulo}</Text>
                          <Text maxWidth={80} align={'right'}>R${item.valor.toFixed(2).toString().replace('.', ',')}</Text>
                      </ItemContainer>
                    ))}
                </Container>
            </ScrollView>
        </Background>
    )
}
