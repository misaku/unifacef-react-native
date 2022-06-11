import {ActionColumn, Box, Container, ItemContainer, Text, Title, Trash} from './styles';
import {DefaultButton} from '../../components/DefaultButton';
import React, {useCallback, useMemo, useState} from 'react';
import {Header} from '../../components/Header';
import {ScrollView} from 'react-native';
import {Background} from '../../components/Background';
import {ItemCarrinho, useCarrinhoStore} from '../../store/Carrinho';

export const Carrinho: React.FC = () => {
  const [load, setload] = useState<boolean>(false)

  const change = async () => {
    setload(true);
    await (new Promise(resolve => setTimeout(resolve, 2000)))
    setload(false)
  }

  const carrinho = useCarrinhoStore(state => state.carrinho)
  const removeItem = useCarrinhoStore(state => state.removeItem)

  const mapItem = useCallback((item: ItemCarrinho) => (
    <ItemContainer>
      <ActionColumn maxWidth={71}>
        <Trash name="trash" size={24} color="black" onPress={() => removeItem(item.jogoId)}/>
      </ActionColumn>
      <Text>{item.titulo}</Text>
      <Text maxWidth={80} align={'right'}>R${item.valor.toFixed(2).replace('.', ',')}</Text>
    </ItemContainer>
  ), [])
  const total = useMemo(() => (
    [0,
      ...carrinho.map(item => item.valor)
    ].reduce((primeiro, segundo) => primeiro + segundo)
      .toFixed(2)
      .replace('.', ',')
  ),[carrinho])
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
          {carrinho.map(mapItem)}
          <ItemContainer borderTop>
            <Title noFlex>TOTAL</Title>
            <Text marginLeft={10} noFlex>R${total}</Text>
          </ItemContainer>

        </Container>

      </ScrollView>
      <Container>
        <DefaultButton title={'FINALIZAR COMPRA'} loading={load} onPress={change}/>
      </Container>

    </Background>
  )
}
